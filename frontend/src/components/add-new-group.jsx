import React, { useState, useEffect, useCallback } from "react";
import closeIcon from "../assets/close-icon.png";
import "../styles/quick-action-buttons.css";
import { useNavigate } from "react-router-dom";
import { AddNewGroupRequest } from "../methods/use-axios.ts";
import { showErrorToast, showSuccessToast } from "../methods/http-error-handler";

export default function AddNewGroup({ closeModal, userId }) {
  const [trigger, setTrigger] = useState(false)
  const [groupName, setGroupName] = useState("");
  const navigate = useNavigate();

  const payload = {
    groupName: groupName,
    userId: userId,
  };

  const [loading, data, error, request] = AddNewGroupRequest(payload)

  if(data && JSON.stringify(data) !== '[]' ) {
    if(data.success) {
      showSuccessToast(data.message)
      navigate(`/groups/${data.groupId}`, { state: { groupName: groupName }, });
    } else {
      showErrorToast(data.message)
    }
    closeModal();
  }

  const sendGroup = useCallback(() => {
    request()
    })
  
  useEffect(() => {
    if (trigger) {
      sendGroup()
      setTrigger(false)
    }
  }, [trigger])

  const handleSubmit = async (e) => {
    e.preventDefault();
    setTrigger(true)
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
