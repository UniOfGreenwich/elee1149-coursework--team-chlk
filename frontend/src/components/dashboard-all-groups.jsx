import { useEffect, useState } from "react";
import "../styles/dashboard-all-groups.css";
import { GroupsRow } from "./dashboard-all-groups-row";
import { Link, useNavigate } from "react-router-dom";

export function Groups({userId}) {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch(`http://localhost:8080/users/groups?userId=${userId}`) // fetching the data
      .then((response) => {
        if (!response.ok) {
          throw new Error("Failed to fetch data");
        }
        return response.json();
      })
      .then((data) => {
        setData(data);
        setLoading(false);
      })
      .catch((error) => {
        setError(error.message);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error: {error}</p>;
  }

  console.log(data); //printing the data to the console

  return (
    <div className="dashboard-grid-component">
      <h2 className="component-title">Groups</h2>
      <p className="balance-title">No. of Members</p>
      <ul>
        {data.map((e) => (
          <li key={e.groupId}>
            <Link to={`/user/${userId}/groups/${e.groupId}/groups-dashboard`}>
                <GroupsRow
                    name={e.groupName}
                    created={e.dateCreated}
                    members={e.numberOfUsers}
                />
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

function getStatus(dataObj) {
  let status = "";

  if (dataObj.balance > 0) {
    status = "owes you";
  } else if (dataObj.balance < 0) {
    status = "is owed";
  } else {
    status = "settled";
  }

  return status;
}
