import React, { useState, useEffect, useCallback } from "react";
import "../styles/quick-action-buttons.css";
import closeIcon from "../assets/close-icon.png";
import { AddNewGroupMemberRequest, FriendsListData, GroupMembersData } from "../methods/use-axios.ts";
import PropTypes from 'prop-types';
import { showErrorToast, showSuccessToast } from "../methods/http-error-handler";

export default function AddMember({ userId, groupId, closeModal, reload}) {
  const [trigger, setTrigger] = useState(false)
  const [selectedFriend, setSelectedFriend] = useState("");

  const [friendsLoading, friendsData, friendsError, friendsRequest] = FriendsListData(userId)

  const [groupMembersLoading, groupMembersData, groupMembersError, groupMembersRequest] = GroupMembersData(groupId, userId)

  const payload = {
    userId: selectedFriend
  }

  const [newMemberLoading, newMemberData, newMemberError, newMemberRequest] = AddNewGroupMemberRequest(groupId, payload)

  if(newMemberData && JSON.stringify(newMemberData) !== '[]' ) {
      if(newMemberData.success) {
        showSuccessToast(newMemberData.message)
      } else {
        showErrorToast(newMemberData.message)
      }
      reload();
      closeModal();
    }
  
    const sendMember = useCallback(() => {
      newMemberRequest()
      })
  
    useEffect(() => {
      if (trigger) {
        sendMember()
        setTrigger(false)
      }
    }, [trigger])

  const handleSubmit = async (e) => {
    e.preventDefault();
    setTrigger(true)
  };

  const getFriendDisplayName = (friend) => {
    if (friend.firstName && friend.lastName) {
      return `${friend.firstName} ${friend.lastName}`;
    } else if (friend.firstName) {
      return friend.firstName;
    } else if (friend.lastName) {
      return friend.lastName;
    } else {
      return friend.email;
    }
  };

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

AddMember.propTypes = {
  reload: PropTypes.func.isRequired,
}
