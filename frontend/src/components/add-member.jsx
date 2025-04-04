import React, { useState, useEffect } from "react";
import "../styles/quick-action-buttons.css";
import closeIcon from "../assets/close-icon.png";

export default function AddMember({ userId, groupId, closeModal }) {
  const [friends, setFriends] = useState([]);
  const [groupMembers, setGroupMembers] = useState([]);
  const [selectedFriend, setSelectedFriend] = useState("");

  useEffect(() => {
    const fetchFriends = async () => {
      try {
        const response = await fetch(
          `http://localhost:8080/friends/list?userId=${userId}`
        );
        if (!response.ok) {
          throw new Error("Failed to fetch friends list");
        }
        const data = await response.json();

        if (data && Array.isArray(data.friends)) {
          setFriends(data.friends);
        } else {
          console.warn("Friends data is not in the expected format:", data);
          setFriends([]); // Set to empty array to avoid errors
        }
      } catch (error) {
        console.error("Error fetching friends:", error);
        setFriends([]); // Set to empty array to avoid errors
      }
    };

    const fetchGroupMembers = async () => {
      try {
        const response = await fetch(
          `http://localhost:8080/group/${groupId}/users`
        );
        if (!response.ok) {
          throw new Error("Failed to fetch group members");
        }
        const data = await response.json();
        setGroupMembers(data);
      } catch (error) {
        console.error("Error fetching group members:", error);
        setGroupMembers([]);
      }
    };

    fetchFriends();
    fetchGroupMembers();
  }, [userId, groupId]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch(
        `http://localhost:8080/group/${groupId}/addUser`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ userId: selectedFriend }), // Send selectedFriend as userId
        }
      );

      if (!response.ok) {
        const errorData = await response.json();
        console.error("Error adding user to group:", errorData);
        // Handle error (e.g., display an error message to the user)
        return;
      }

      const responseData = await response.json();
      console.log("User added to group successfully:", responseData);

      // Reload the page after successful group creation
      window.location.reload();
    } catch (error) {
      console.error("Error adding user to group:", error);
      // Handle error (e.g., display an error message to the user)
    }
  };

  const getFriendDisplayName = (friend) => {
    if (friend.firstName && friend.lastName) {
      return `${friend.firstName} ${friend.lastName}`;
    } else if (friend.firstName) {
      return friend.firstName;
    } else if (friend.lastName) {
      return friend.lastName;
    } else {
      return friend.email; // Fallback to email if no name is available
    }
  };

  // Filter out friends who are already in the group
  const availableFriends = friends.filter(
    (friend) => !groupMembers.some((member) => member.userId === friend.userId)
  );

  return (
    <div className="modal-overlay" onClick={closeModal}>
      <div className="modal-box" onClick={(e) => e.stopPropagation()}>
        <h3 className="action-title">Add New User</h3>
        <div className="modal-content">
          <form className="action-form new-group-form" onSubmit={handleSubmit}>
            <div className="form-row">
              <label htmlFor="new-user">Select User</label>
              <select
                name="new-user"
                id="new-user"
                value={selectedFriend}
                onChange={(e) => setSelectedFriend(e.target.value)}
              >
                <option value="">Select a friend</option>
                {availableFriends.map((friend) => (
                  <option key={friend.userId} value={friend.userId}>
                    {getFriendDisplayName(friend)}
                  </option>
                ))}
              </select>
            </div>
            <input type="submit" value="Add User to Group" id="submit" />
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
