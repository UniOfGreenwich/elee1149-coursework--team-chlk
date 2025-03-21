import { useEffect, useState } from "react";
import "../styles/groups.css"
import { GroupsListItem } from "./groups-list-item";

export function GroupsList({userId}) {
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
    <div className="groups-list-wrapper">
      <ul>
        {data.map((e) => (
          <li key={e.groupId}>
            <GroupsListItem
              groupName={e.groupName}
              dateCreated={e.dateCreated}
              updatedAt={e.updatedAt}
              numberOfUsers={e.numberOfUsers}
              totalSpent={e.totalSpent}
            />
          </li>
        ))}
      </ul>
    </div>
  );
}
