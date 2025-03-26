import "../styles/friends.css";
import { FriendsListItem } from "./friends-list-item";

export function FriendsList({userId}) {
    const data = [
        {friendId: 1, friendFName: "Lewis", friendLName: "Walker", friendEmail: "lewis@gmail.com", status: "Pending"},
        {friendId: 2, friendFName: "Lewis", friendLName: "Walker", friendEmail: "lewis@gmail.com", status: "Active"},
    ]

    return (
      <div>
        <ul>
          {data.map((e) => (
            <li key={e.friendId}>
                  <FriendsListItem
                      firstName={e.friendFName}
                      lastName={e.friendLName}
                      email={e.friendEmail}
                      status={e.status}
                  />
            </li>
          ))}
        </ul>
      </div>
    );
  }