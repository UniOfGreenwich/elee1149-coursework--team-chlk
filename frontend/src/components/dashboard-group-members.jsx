import { useEffect, useState } from "react";
import "../styles/dashboard-group-members.css";
import { GroupMembersRow } from "./dashboard-group-members-row";
import { Link, useNavigate } from "react-router-dom";

export function GroupMembers({currentUserId, groupId, loading, data, error}) {

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error: {error}</p>;
  }

  console.log(data); //printing the data to the console

  const sortedMembers=data.filter(item => item.userId.toString() !== currentUserId).sort((a, b) => a.balance - b.balance)

  return (
    <div className="dashboard-grid-component-scroll">
            <div className="component-header">
              <h2 className="component-title">Group Members</h2>
              <Link to={`${window.location.href}`}>
                  <p className="add-member-button">+ Member</p>
              </Link>
            </div>
      <p className="balance-title">Balance</p>
      <ul className="component-content">
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
