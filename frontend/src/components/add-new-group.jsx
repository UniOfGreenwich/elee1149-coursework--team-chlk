import React, { useState } from "react";
import closeIcon from "../assets/close-icon.png";
import "../styles/quick-action-buttons.css";

export default function AddNewGroup({ closeModal, userId }) {
  const [groupName, setGroupName] = useState("");

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

      const responseData = await response.json(); // Or response.text() if needed
      console.log("Group created successfully:", responseData);

      window.location.reload(); //reloading the page to update changes

      // Optionally: Clear the form and close the modal
      setGroupName("");
      closeModal();
      // Reload the page after successful group creation
    } catch (error) {
      console.error("Error creating group:", error);
      // Handle the error (e.g., display an error message)
    }
  };

  return (
    <div className="modal-overlay" onClick={closeModal}>
      <div className="modal-box" onClick={(e) => e.stopPropagation()}>
        <h3 className="action-title">Create New Group</h3>
        <div className="modal-content">
          <form className="action-form new-group-form" onSubmit={handleSubmit}>
            <div className="form-row">
              <label htmlFor="group-name">Group Name</label>
              <input
                type="text"
                placeholder="Enter new group name"
                value={groupName}
                onChange={(e) => setGroupName(e.target.value)}
              />
            </div>
            <input type="submit" value="Create New Group" id="submit" />
          </form>
        </div>
        <img
          onClick={closeModal}
          src={closeIcon}
          alt=""
          className="close-icon"
        />
      </div>
    </div>
  );
}
