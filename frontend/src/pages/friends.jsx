import "../styles/friends.css";
import { useParams } from "react-router-dom";
import { FriendsRequest } from "../components/friends-request";
import { FriendsList } from "../components/friends-list";
import { FriendsListData, PendingRequestData } from "../methods/use-axios.ts";
import { TopBar } from "../components/dashboard-topbar";
import React, { useCallback, useEffect, useState } from "react";
import AddNewFriend from "../components/add-new-friend";


export function Friends() {
  const [modalType, setModalType] = useState(null);

  const openModal = (type) => setModalType(type);
  const closeModal = () => setModalType(null);
  let params = useParams()
  const [friendLoading, friendData, friendError, friendRequest] = FriendsListData(params.id)
  const [pendingLoading, pendingData, pendingError, pendingRequest] = PendingRequestData(params.id)

  const reloadData = useCallback(() => {
    friendRequest()
    pendingRequest()
  })

  useEffect(() => reloadData(), [])
  
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
        {pendingLoading ?
          <p>Loading...</p> :
          pendingError ?
            <p>Unable to load, see error</p> :
            <div>
              <h2 className="friends-request-header">Friend Requests</h2>
              <ul className="request-component">
                <li className="request-component-list">
                  <FriendsRequest userId={params.id} data={pendingRecievedData} reload={reloadData}/>
                </li>
              </ul>
            </div>
        }
      </div>
    ): null : null }
      <div className={"friend-list-wrapper-" + (pendingRecievedData !== null ? pendingRecievedData.length !== 0 ? "with-requests" : "without-requests" : "without-requests" )}>
        {combinedLoading ?
          <p>Loading...</p> :
          combinedError ?
            <p>Unable to load, see error</p> :
            <div>
          <h2 className="friends-list-header">Your Friends</h2>
          {friendData && pendingSentData && JSON.stringify(friendData) !== '[]' && JSON.stringify(pendingSentData) !== '[]' ? 
            <div>
              <p className="friend-status-title">Status</p>
              <ul className={"friends-component-" + (pendingRecievedData !== null ? pendingRecievedData.length !== 0 ? "with-requests" : "without-requests" : "without-requests" )}>
                <li className="friends-component-list">
                  <FriendsList activeData={friendData.friends} pendingData={pendingSentData}/>
                </li>
              </ul> 
            </div> :
          <p className="no-data-message">No friends have been added</p>
          }
        </div>
        } 
      </div>
      {modalType === "AddNewFriend" && (
        <AddNewFriend userId={params.id} reload={reloadData} closeModal={closeModal} />
      )}
      
        
        
    </div>
</div>
  );
}
