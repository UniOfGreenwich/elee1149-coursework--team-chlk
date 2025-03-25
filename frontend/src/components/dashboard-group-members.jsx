import { useEffect, useState } from "react";
import "../styles/dashboard-group-members.css";
import { GroupMembersRow } from "./dashboard-group-members-row";

const {REACT_APP_BACKEND_URL} = require('./dockerenv');
export const BACKEND_URL = REACT_APP_BACKEND_URL;
export function GroupMembers() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch(`${BACKEND_URL}/group/1/1/users`) // fetching the data
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
      <h2 className="component-title">Group Members</h2>
      <p className="balance-title">Balance</p>
      <ul>
        {data.map((e) => (
          <li key={e.userId}>
            <GroupMembersRow
              name={e.firstName}
              status={getStatus(e)}
              balance={e.balance}
            />
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
