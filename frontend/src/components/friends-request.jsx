import "../styles/friends.css";
import { FriendsRequestItem } from "./friends-request-item";

export function FriendsRequest({data, reload}) {

    return (
      <div>
        <ul>
          {data.map((e) => (
            <li key={e.userId}>
                  <FriendsRequestItem
                    userId={e.userId}
                    firstName={e.firstName}
                    lastName={e.lastName}
                    email={e.email}
                    username={e.username}
                    requestId={e.requestId}
                    reload={reload}
                  />
            </li>
          ))}
        </ul>
      </div>
    );
  }