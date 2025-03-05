import { useEffect, useState } from "react";
import "../styles/dashboard-group-members.css";
import { GroupMembersRow } from "./dashboard-group-members-row";

export function GroupMembers() {
  //   fetching the data - currently not working
  //   const [data, setData] = useState([]);
  //   const [loading, setLoading] = useState(true);
  //   const [error, setError] = useState(null);

  //   useEffect(() => {
  //     fetch("http://localhost:8080/group/1/users")
  //       .then((response) => {
  //         if (!response.ok) {
  //           throw new Error("Failed to fetch data");
  //         }
  //         return response.json();
  //       })
  //       .then((data) => {
  //         setData(data);
  //         setLoading(false);
  //       })
  //       .catch((error) => {
  //         setError(error.message);
  //         setLoading(false);
  //       });
  //   }, []);

  //   if (loading) return <p>Loading...</p>;
  //   if (error) return <p>Error: {error}</p>;

  const data = [
    {
      userId: 5,
      firstName: "Heather",
      lastName: "Russell",
      email: "Heather@gmail.com",
      username: "HeatherR",
      passwordHash: null,
      password: "password789",
      balance: 20,
    },

    {
      userId: 1,
      firstName: "Charu",
      lastName: "Srivastava",
      email: "Charu@email.com",
      username: "charu_s",
      passwordHash: null,
      password: "password1",
      balance: -30.5,
    },
    {
      userId: 2,
      firstName: "Kyle",
      lastName: "Anderson",
      email: "kyle@email.com",
      username: "kyle_a",
      passwordHash: null,
      password: "password1",
      balance: 15.0,
    },
  ];

  // console.log(data); printing the data to the console

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
