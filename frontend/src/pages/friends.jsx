import "../styles/friends.css";
import { useParams } from "react-router-dom";
import { FriendsRequest } from "../components/friends-request";
import { FriendsList } from "../components/friends-list";
import { FriendsListData, PendingRequestData } from "../methods/use-axios.ts";


export function Friends() {
  let params = useParams()
  const [friendLoading, friendData, friendError, friendRequest] = FriendsListData(params.id)
  const [pendingLoading, pendingData, pendingError, pendingRequest] = PendingRequestData(params.id)

  
  const pendingRecievedData = !pendingData.friends.filter(item => item.recieverId.toString() === params.id) ? null : pendingData.friends.filter(item => item.recieverId.toString() === params.id)
  const pendingSentData = !pendingData.friends.filter(item => item.senderId.toString() === params.id)  ? null : pendingData.friends.filter(item => item.senderId.toString() === params.id)

  const combinedLoading = pendingLoading || friendLoading ? true : false;

  const combinedError = pendingError || friendError ? pendingError === friendError ? pendingError : pendingError + friendError : null;

  return (
    <div className="friends-wrapper">
      <div className="friends-header">
        <h1 className="friends-title">Friends</h1>
        <p className="add-friend-button">+ New Friend</p>
      </div>
      {pendingRecievedData.length !== 0 ? (
      <div className="request-list-wrapper">
        <h2 className="friends-request-header">Friend Requests</h2>
          <ul className="request-component">
            <li className="request-component-list">
              <FriendsRequest userId={params.id} loading={pendingLoading} data={pendingRecievedData} error={pendingError}/>
            </li>
          </ul>
        </div>
    ):null}
      <div className={"friend-list-wrapper-" + (pendingRecievedData.length !== 0 ? "with-requests" : "without-requests")}>
        <h2 className="friends-list-header">Your Friends</h2>
        <p className="friend-status-title">Status</p>
        <ul className={"friends-component-" + (pendingRecievedData.length !== 0 ? "with-requests" : "without-requests")}>
          <li className="friends-component-list">
            <FriendsList userId={params.id} loading={combinedLoading} activeData={friendData.friends} pendingData={pendingSentData} error={combinedError}/>
          </li>
        </ul>
      </div>
    </div>

  );
}
