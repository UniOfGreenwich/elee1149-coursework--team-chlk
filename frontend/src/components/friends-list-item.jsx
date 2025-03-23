import "../styles/friends.css";

export function FriendsListItem(props) {
    return (
        <div className="friend-list-item">
            <div className="friend-details-column">
                <p className="friend-name">{`${props.firstName} ${props.lastName}`}</p>
                <p className="friend-email">{props.email}</p>
            </div>
            <p className="friend-status">{props.status}</p>
        </div>
    )
}