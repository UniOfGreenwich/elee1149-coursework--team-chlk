import React, { useState, useEffect, useCallback } from "react";
import closeIcon from "../assets/close-icon.png";
import "../styles/quick-action-buttons.css";
import { showErrorToast, showSuccessToast } from "../methods/http-error-handler";
import { AddNewFriendRequest } from "../methods/use-axios";
import PropTypes from 'prop-types';

export default function AddNewFriend({ closeModal, userId, reload }) {
  const [trigger, setTrigger] = useState(false)
  const [friendEmail, setFriendEmail] = useState("");

   const [loading, data, error, request] = AddNewFriendRequest(userId, friendEmail)

   if(data && JSON.stringify(data) !== '[]' ) {
    if(data.success) {
      showSuccessToast(data.message)
    } else {
      showErrorToast(data.message)
    }
    reload()
    closeModal();
  }

  const sendFriend = useCallback(() => {
    request()
  })
    
  useEffect(() => {
    if (trigger) {
      sendFriend()
      setTrigger(false)
    }
  }, [trigger])

  const handleSubmit = async (e) => {
    e.preventDefault();
    setTrigger(true)
  };

  return (
    <div className="modal-overlay" onClick={closeModal}>
      <div className="modal-box" onClick={(e) => e.stopPropagation()}>
        <h3 className="action-title">Add New Friend</h3>
        <div className="modal-content">
          <form className="action-form new-group-form" onSubmit={handleSubmit}>
            <div className="form-row">
              <label htmlFor="friend-email">Friend Email: </label>
              <input
                type="text"
                placeholder="Enter friend email"
                id="friend-email"
                value={friendEmail}
                onChange={(e) => setFriendEmail(e.target.value)}
              />
            </div>
            <input type="submit" value="Add New Friend" id="submit" />
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

AddNewFriend.propTypes = {
  reload: PropTypes.func.isRequired,
}
