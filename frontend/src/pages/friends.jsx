import "../styles/friends.css";
import { useParams } from "react-router-dom";
import { FriendsRequest } from "../components/friends-request";
import { FriendsList } from "../components/friends-list";
import { FriendsListData, PendingRequestData } from "../methods/use-axios.ts";
import { TopBar } from "../components/dashboard-topbar";
import React, { useState } from "react";
import AddNewFriend from "../components/add-new-friend";


export function Friends() {
  const [modalType, setModalType] = useState(null); // null means no modal is open

  const openModal = (type) => setModalType(type);
  const closeModal = () => setModalType(null);
  let params = useParams()
  const [friendLoading, friendData, friendError, friendRequest] = FriendsListData(params.id)
  const [pendingLoading, pendingData, pendingError, pendingRequest] = PendingRequestData(params.id)
  
  const pendingRecievedData = pendingData.friends !== undefined ? !pendingData.friends.filter(item => item.recieverId.toString() === params.id) ? null : pendingData.friends.filter(item => item.recieverId.toString() === params.id) : null
  const pendingSentData = pendingData.friends !== undefined ? !pendingData.friends.filter(item => item.senderId.toString() === params.id) ? null : pendingData.friends.filter(item => item.senderId.toString() === params.id) : null

  const combinedLoading = pendingLoading || friendLoading ? true : false;

  const combinedError = pendingError || friendError ? pendingError === friendError ? pendingError : pendingError + friendError : null;

  return (
    <div className="dashboard-content">
    <div className="topbar">
      <TopBar pageName="Friends" />
    </div>
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
      {pendingRecievedData !== null ? pendingRecievedData.length !== 0 ? (
      <div className="request-list-wrapper">
        <h2 className="friends-request-header">Friend Requests</h2>
          <ul className="request-component">
            <li className="request-component-list">
              <FriendsRequest userId={params.id} loading={pendingLoading} data={pendingRecievedData} error={pendingError}/>
            </li>
          </ul>
        </div>
    ): null : null }
      <div className={"friend-list-wrapper-" + (pendingRecievedData !== null ? pendingRecievedData.length !== 0 ? "with-requests" : "without-requests" : "without-requests" )}>
        <h2 className="friends-list-header">Your Friends</h2>
        <p className="friend-status-title">Status</p>
        <ul className={"friends-component-" + (pendingRecievedData !== null ? pendingRecievedData.length !== 0 ? "with-requests" : "without-requests" : "without-requests" )}>
          <li className="friends-component-list">
            <FriendsList userId={params.id} loading={combinedLoading} activeData={friendData.friends} pendingData={pendingSentData} error={combinedError}/>
          </li>
        </ul>
      </div>
      {modalType === "AddNewFriend" && (
        <AddNewFriend userId={params.id} groupId={params.groupId} closeModal={closeModal} />
      )}
    </div>
</div>
  );
}
