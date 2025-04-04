import { useEffect, useState } from "react";
import "../styles/dashboard-all-groups.css";
import GroupsRow from "./dashboard-all-groups-row";
import { Link, useNavigate } from "react-router-dom";
import chevron from "../assets/chevron-icon.png"

export function Groups({userId, loading, data, error}) {

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error: {error}</p>;
  }

  if(data !== undefined) {
    data.forEach(item => {
      if(item.updatedAt === null) {
        item.updatedAt = item.dateCreated
      }
    })
  }

  console.log(data); //printing the data to the console

  const sortedGroups = data.sort((a,b) => new Date(a.updatedAt) - new Date(b.updatedAt)).reverse().slice(0,5)

  console.log(sortedGroups)

  return (
    <div className="dashboard-grid-component">
            <div className="component-header">
              <h2 className="component-title">Groups</h2>
              <Link to={`${window.location.href}groups`}>
                <div className="view-all-button">
                  <p className="view-all">View All</p>
                  <img src={chevron} alt="" />
                </div>
              </Link>
            </div>
      <p className="balance-title">No. of Members</p>
      <ul>
        {sortedGroups.map((e) => (
          <li key={e.groupId}>
            <Link to={`/user/${userId}/groups/${e.groupId}`} state={{ groupName: e.groupName} }>
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
