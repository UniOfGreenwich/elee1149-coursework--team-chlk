import { useEffect, useState } from "react";
import "../styles/dashboard-group-members.css";
import { GroupMembersRow } from "./dashboard-group-members-row";
import { useParams } from "react-router-dom";
import AddMember from "./add-member";

export function GroupMembers({ userId, groupId }) {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [modalType, setModalType] = useState(null); // null means no modal is open

  const openModal = (type) => setModalType(type);
  const closeModal = () => setModalType(null);
  let params = useParams();

  useEffect(() => {
    fetch(`http://localhost:8080/group/${groupId}/${userId}/users`) // fetching the data
      .then((response) => {
        if (!response.ok) {
          throw new Error("Failed to fetch data");
        }
        return response.json();
      })
      .then((data) => {
        // Filter out the logged-in user
        const filteredData = data.filter(
          (member) => member.userId !== parseInt(userId)
        );
        setData(filteredData);
        setLoading(false);
      })
      .catch((error) => {
        setError(error.message);
        setLoading(false);
      });
  }, [groupId, userId]);

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error: {error}</p>;
  }

  console.log(data); //printing the data to the console

  return (
    <div className="dashboard-grid-component scroll">
      <div className="title-row">
        <h2 className="component-title">Group Members</h2>
        <button
          className="add-user-button"
          onClick={() => openModal("AddMember")}
        >
          + Add User
        </button>
      </div>
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
      {modalType === "AddMember" && (
        <AddMember
          userId={params.id}
          groupId={params.groupId}
          closeModal={closeModal}
        />
      )}
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
