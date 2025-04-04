import React, { useState } from "react";
import closeIcon from "../assets/close-icon.png";
import "../styles/quick-action-buttons.css";
import { useNavigate } from "react-router-dom";

export default function AddNewGroup({ closeModal, userId }) {
  const [groupName, setGroupName] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    const groupData = {
      groupName: groupName,
      userId: userId,
    };

    try {
      const response = await fetch("http://localhost:8080/group/create", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(groupData),
      });

      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }

      const responseData = await response.json();
      console.log("Group created successfully:", responseData);

      // new groupId from the responseData
      const newGroupId = responseData.groupId;

      // redirecting to the newly created group's page
      navigate(`/user/${userId}/groups/${newGroupId}`, {
        state: { groupName: groupName },
      });

      setGroupName("");
      closeModal();
    } catch (error) {
      console.error("Error creating group:", error);
      // Handle the error (e.g., display an error message)
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
