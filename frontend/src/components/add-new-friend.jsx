import React, { useState } from "react";
import closeIcon from "../assets/close-icon.png";
import "../styles/quick-action-buttons.css";
import axios from "axios";

async function userNewFriend(userId, friendEmail) {
  return axios.post(
    `friends/sendRequest?userId=${userId}&friendEmail=${friendEmail}`,
    null,
    {'Content-Type': 'application/json'}
  )
  .then(response => response.data)
}

export default function AddNewFriend({ closeModal, userId }) {
  const [friendEmail, setFriendEmail] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setErrorMessage(""); // Clear any previous error message

    const newFriend = await userNewFriend(userId, friendEmail)
    if (newFriend.success) {
      console.log("friend request sent successfully:", newFriend)
      setFriendEmail("");
      window.location.reload();
      closeModal();
    } else {
      console.log("Error sending friend request:", newFriend.message)
      setErrorMessage(newFriend.message)
    }
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
            {errorMessage && <p className="error-message">{errorMessage}</p>}
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
