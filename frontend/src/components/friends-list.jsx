import "../styles/friends.css";
import { FriendsListItem } from "./friends-list-item";

export function FriendsList({activeData, pendingData }) {

    return (
      <div>
        <ul>
          {pendingData.map((e) => (
            <li key={e.userId}>
                  <FriendsListItem
                    userId={e.userId}
                    firstName={e.firstName}
                    lastName={e.lastName}
                    email={e.email}
                    username={e.username}
                    status={"Pending"}
                  />
            </li>
          ))}
          {activeData.map((e) => (
            <li key={e.userId}>
                  <FriendsListItem
                    userId={e.userId}
                    firstName={e.firstName}
                    lastName={e.lastName}
                    email={e.email}
                    username={e.username}
                    status={"Active"}
                  />
            </li>
          ))}
        </ul>
      </div> 
    );
  }