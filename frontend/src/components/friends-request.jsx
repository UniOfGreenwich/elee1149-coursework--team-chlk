import "../styles/friends.css";
import { FriendsRequestItem } from "./friends-request-item";

export function FriendsRequest({userId}) {
    const data = [
        {friendId: 1, friendFName: "Lewis", friendLName: "Walker", friendEmail: "lewis@gmail.com"},
        {friendId: 2, friendFName: "Lewis", friendLName: "Walker", friendEmail: "lewis@gmail.com"},
    ]

    return (
      <div>
        <ul>
          {data.map((e) => (
            <li key={e.friendId}>
                  <FriendsRequestItem
                      firstName={e.friendFName}
                      lastName={e.friendLName}
                      email={e.friendEmail}
                  />
            </li>
          ))}
        </ul>
      </div>
    );
  }