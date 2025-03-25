import "../styles/friends.css";

export function FriendsRequestItem(props) {
    return (
        <div className="friend-request-item">
            <div className="request-details-column">
                <p className="request-name">{`${props.firstName} ${props.lastName}`}</p>
                <p className="request-email">{props.email}</p>
            </div>
            <div className="request-user-decision">
                <div className="request-accept-button">
                    <p className="button-name">Accept</p>
                </div>
                <div className="request-decline-button">
                    <p className="button-name">Decline</p>
                </div>
            </div>
        </div>
    )
}