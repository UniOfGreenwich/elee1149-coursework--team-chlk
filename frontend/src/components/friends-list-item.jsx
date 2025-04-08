import "../styles/friends.css";

export function FriendsListItem(props) {
    return (
        <div className="friend-list-item">
            <p className="friend-username">{props.username}</p>
            <p className="friend-name">{`${props.firstName} ${props.lastName}`}</p>
            <p className="friend-email">{props.email}</p>
            <p className="friend-status">{props.status}</p>
        </div>
    )
}