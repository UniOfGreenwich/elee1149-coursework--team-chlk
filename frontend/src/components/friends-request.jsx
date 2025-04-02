import "../styles/friends.css";
import { FriendsRequestItem } from "./friends-request-item";

export function FriendsRequest({userId, loading, data, error}) {

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error: {error}</p>;
  }

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
                  />
            </li>
          ))}
        </ul>
      </div>
    );
  }