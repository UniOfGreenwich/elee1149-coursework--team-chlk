import React from "react";
import "../styles/groups.css"
import { GroupsListItem } from "./groups-list-item.jsx";
import { Link } from "react-router-dom";

export function GroupsList({userId, loading, data, error}) {

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

  const sortedGroups = data.sort((a,b) => new Date(a.updatedAt) - new Date(b.updatedAt)).reverse()

  return (
    <div>
      <ul>
        {sortedGroups.map((e) => (
          <li key={e.groupId}>
            <Link to={`/user/${userId}/groups/${e.groupId}/`} state={{ groupName: e.groupName} }>
                <GroupsListItem
                    groupName={e.groupName}
                    dateCreated={e.dateCreated}
                    updatedAt={e.updatedAt}
                    numberOfUsers={e.numberOfUsers}
                    totalSpent={e.totalSpent}
                />
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}


