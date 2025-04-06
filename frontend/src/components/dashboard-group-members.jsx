import { useState } from "react";
import "../styles/dashboard-group-members.css";
import { GroupMembersRow } from "./dashboard-group-members-row";
import { Link } from "react-router-dom";
import { useLocation, useParams } from "react-router-dom";
import AddMember from "./add-member";

export function GroupMembers({ userId, groupId, loading, data, error, reload}) {
  const [modalType, setModalType] = useState(null);
  const openModal = (type) => setModalType(type);
  const closeModal = () => setModalType(null);
  let params = useParams();
  const location = useLocation();
  const { groupName } = location.state;


  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Unable to load, see error</p>;
  }

  const filteredMembers = data.filter(
    (member) => member.userId !== parseInt(userId)
  );

  const sortedMembers = filteredMembers.sort((a, b) => a.balance - b.balance);

  return (
    <div className="dashboard-grid-component-scroll">
      <div className="component-header">
        <h2 className="component-title">Group Members</h2>
        <Link to={`${window.location.href}`} state={{ groupName: groupName }}>
          <button
            onClick={() => openModal("AddMember")}
            className="add-member-button"
          >
            + Member
          </button>
        </Link>
      </div>
      {data && JSON.stringify(filteredMembers) !== '[]' ? 
      <div>
      <p className="balance-title">Balance</p>
      <ul className="component-content">
        {sortedMembers.map((e) => (
          <li key={e.userId}>
            <GroupMembersRow
              name={e.firstName}
              status={getStatus(e)}
              balance={e.balance}
              user={e}
              currentUser={userId}
              groupId={groupId}
            />
          </li>
        ))}
      </ul>
      </div> :
      <p className="no-data-message">No other members have been added</p>
}
      {modalType === "AddMember" && (
        <AddMember
          userId={params.id}
          groupId={params.groupId}
          closeModal={closeModal}
          reload={reload}
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
