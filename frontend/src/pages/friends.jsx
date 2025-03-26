import "../styles/friends.css";
import { useParams } from "react-router-dom";
import { FriendsRequest } from "../components/friends-request";
import { FriendsList } from "../components/friends-list";


export function Friends() {
  let params = useParams()
  return (
    <div className="friends-wrapper">
      <div className="friends-header">
        <h1 className="friends-title">Friends</h1>
        <p className="add-friend-button">+ New Friend</p>
      </div>
      <div className="request-list-wrapper">
        <h2 className="friends-request-header">Friend Requests</h2>
        <ul className="request-component">
          <li className="request-component-list">
            <FriendsRequest userId={params.id}/>
          </li>
        </ul>
      </div>
      <div className="friend-list-wrapper">
        <h2 className="friends-list-header">Your Friends</h2>
        <p className="friend-status-title">Status</p>
        <ul className="friends-component">
          <li className="friends-component-list">
            <FriendsList userId={params.id}/>
          </li>
        </ul>
      </div>
    </div>

  );
}
