import React, { useState, useEffect } from "react";
import "../styles/quick-action-buttons.css";
import closeIcon from "../assets/close-icon.png";
import { FriendsListData, GroupMembersData } from "../methods/use-axios.ts";
import axios from "axios";

async function userAddMember(friendInformation, groupId) {
  return axios.post(
  `group/${groupId}/addUser`,
  friendInformation,
  {'Content-Type': 'application/json'}
  )
  .then(response => response.data)
}

export default function AddMember({ userId, groupId, closeModal }) {
  const [friends, setFriends] = useState([]);
  const [groupMembers, setGroupMembers] = useState([]);
  const [selectedFriend, setSelectedFriend] = useState("");

  const [friendsLoading, friendsData, friendsError, friendsRequest] = FriendsListData(userId)

  const [groupMembersLoading, groupMembersData, groupMembersError, groupMembersRequest] = GroupMembersData(groupId, userId)

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newMember = await userAddMember({
      "userId": selectedFriend
    }, groupId)
    if (newMember.success) {
      console.log("user added to group successfully:", newMember)
      window.location.reload();
      closeModal();
    } else {
      console.log("error adding user to group:", newMember.message)
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
  const availableFriends = friendsData.friends === undefined ? undefined : friendsData.friends.filter(
    (friend) => !groupMembersData.some((member) => member.userId === friend.userId)
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
                {availableFriends !== undefined ?
                  availableFriends.map((friend) => (
                    <option key={friend.userId} value={friend.userId}>
                      {getFriendDisplayName(friend)}
                    </option>
                  )) : null
                } 

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
