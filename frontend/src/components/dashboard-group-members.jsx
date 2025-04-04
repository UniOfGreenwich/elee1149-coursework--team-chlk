import { useEffect, useState } from "react";
import "../styles/dashboard-group-members.css";
import { GroupMembersRow } from "./dashboard-group-members-row";
import { Link, useNavigate } from "react-router-dom";
import { useLocation, useParams } from "react-router-dom";
import AddMember from "./add-member";

export function GroupMembers({ userId, groupId, loading, data, error }) {
  const [modalType, setModalType] = useState(null); // null means no modal is open
  const openModal = (type) => setModalType(type);
  const closeModal = () => setModalType(null);
  let params = useParams();

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error: {error}</p>;
  }

  console.log(data); //printing the data to the console

  const sortedMembers = data.sort((a, b) => a.balance - b.balance);

  return (
    <div className="dashboard-grid-component">
      <div className="component-header">
        <h2 className="component-title">Group Members</h2>
        <Link to={`${window.location.href}`}>
          <button
            onClick={() => openModal("AddMember")}
            className="add-member-button"
          >
            + Member
          </button>
        </Link>
      </div>
      <p className="balance-title">Balance</p>
      <ul>
        {sortedMembers.map((e) => (
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
