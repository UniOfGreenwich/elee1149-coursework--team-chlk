import "../styles/friends.css";
import { useParams } from "react-router-dom";
import { FriendsRequest } from "../components/friends-request";
import { FriendsList } from "../components/friends-list";
import React, { useState } from "react";
import AddNewFriend from "../components/add-new-friend";

export function Friends() {
  const [modalType, setModalType] = useState(null); // null means no modal is open

  const openModal = (type) => setModalType(type);
  const closeModal = () => setModalType(null);

  let params = useParams();
  return (
    <div className="friends-wrapper">
      <div className="friends-header">
        <h1 className="friends-title">Friends</h1>
        <button
          onClick={() => openModal("AddNewFriend")}
          className="add-friend-button"
        >
          + New Friend
        </button>
      </div>
      <div className="request-list-wrapper">
        <h2 className="friends-request-header">Friend Requests</h2>
        <ul className="request-component">
          <li className="request-component-list">
            <FriendsRequest userId={params.id} />
          </li>
        </ul>
      </div>
      <div className="friend-list-wrapper">
        <h2 className="friends-list-header">Your Friends</h2>
        <p className="friend-status-title">Status</p>
        <ul className="friends-component">
          <li className="friends-component-list">
            <FriendsList userId={params.id} />
          </li>
        </ul>
      </div>
      {modalType === "AddNewFriend" && (
        <AddNewFriend userId={params.id} groupId={params.groupId} closeModal={closeModal} />
      )}
    </div>
  );
}
