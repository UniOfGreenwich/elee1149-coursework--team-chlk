import React, { useEffect, useState } from "react";
import "../styles/groups.css"
import { GroupsListItem } from "./groups-list-item.jsx";
import { Link, useNavigate } from "react-router-dom";

export function GroupsList({userId, loading, data, error}) {

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error: {error}</p>;
  }

  console.log(data); //printing the data to the console

  const sortedGroups = data.sort((a,b) => new Date(a.updatedAt) - new Date(b.updatedAt)).reverse()

  console.log(sortedGroups)

  return (
    <div>
      <ul>
        {sortedGroups.map((e) => (
          <li key={e.groupId}>
            <Link to={`/user/${userId}/groups/${e.groupId}/`}>
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


