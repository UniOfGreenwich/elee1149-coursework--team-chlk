import React, { useState } from "react";
import closeIcon from "../assets/close-icon.png";
import "../styles/quick-action-buttons.css";

export default function AddNewFriend({ closeModal, userId }) {
  const [friendEmail, setFriendEmail] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setErrorMessage(""); // Clear any previous error message

    // Check if the email exists in the database
    const userExists = await checkIfUserExists(friendEmail);

    if (!userExists) {
      setErrorMessage("User doesn't exist");
      return;
    }

    const friendData = {
      userId: userId,
      friendEmail: friendEmail,
    };

    try {
      const response = await fetch(
        "http://localhost:8080/friends/sendRequest",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(friendData),
        }
      );

      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }

      const responseData = await response.json(); // Or response.text()
      console.log("Friend request sent successfully:", responseData);

      // Clearing the form and close the modal
      setFriendEmail("");
      closeModal();
    } catch (error) {
      console.error("Error sending friend request:", error);
      setErrorMessage("An error occurred while sending the request.");
      // Handle the error (e.g., display an error message)
    }
  };

  const checkIfUserExists = async (email) => {
    try {
      const response = await fetch(
        `http://localhost:8080/friends/list?userId=${userId}`
      );
      if (!response.ok) {
        throw new Error("Failed to fetch friends list");
      }
      const friends = await response.json();

      // Check if the email exists in the friends list
      return friends.some((friend) => friend.email === email);
    } catch (error) {
      console.error("Error checking if user exists:", error);
      return false; // Assume user doesn't exist in case of an error
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
