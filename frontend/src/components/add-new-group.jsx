import React, { useState } from "react";
import closeIcon from "../assets/close-icon.png";
import "../styles/quick-action-buttons.css";
import { useNavigate } from "react-router-dom";
import axios from "axios";

async function userNewGroup(groupInformation) {
  return axios.post(
    `group/create`,
    groupInformation,
    {'Content-Type': 'application/json'}
  )
  .then(response => response.data)
}

export default function AddNewGroup({ closeModal, userId }) {
  const [groupName, setGroupName] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    const groupData = {
      groupName: groupName,
      userId: userId,
    };

    const newGroup = await userNewGroup(groupData)
    if (newGroup.success) {
      console.log("Group created successfully:", newGroup)
      navigate(`/user/${userId}/groups/${newGroup.groupId}`, {
            state: { groupName: groupName },
          });
    
          setGroupName("");
          closeModal();
    } else {
      console.log("Error creating group:", newGroup.message)
    }
  };

  return (
    <div className="modal-overlay" onClick={closeModal}>
      {" "}
      <div className="modal-box" onClick={(e) => e.stopPropagation()}>
        {" "}
        <h3 className="action-title">Create New Group</h3>{" "}
        <div className="modal-content">
          {" "}
          <form className="action-form new-group-form" onSubmit={handleSubmit}>
            {" "}
            <div className="form-row">
              {" "}
              <label htmlFor="group-name">Group Name</label>{" "}
              <input
                type="text"
                placeholder="Enter new group name"
                value={groupName}
                onChange={(e) => setGroupName(e.target.value)}
              />{" "}
            </div>{" "}
            <input type="submit" value="Create New Group" id="submit" />{" "}
          </form>{" "}
        </div>{" "}
        <img
          onClick={closeModal}
          src={closeIcon}
          alt=""
          className="close-icon"
        />{" "}
      </div>{" "}
    </div>
  );
}
