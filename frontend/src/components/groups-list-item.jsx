import "../styles/groups.css"
import {format} from "date-fns"
import { Link, useNavigate } from "react-router-dom";

export function GroupsListItem(props) {
    return (
        <div className="group-list-item">
            <Link to={`/user/${props.userId}/groups/${props.groupId}/groups-dashboard`}>
            <p className="group-name">{props.groupName}</p>
            <p className="group-date-created">{format(props.dateCreated, "dd MMM yyyy")}</p>
            <p className="group-last-updated">{format(props.updatedAt, "dd MMM yyyy")}</p>
            <p className="group-total-spent">£{props.totalSpent.toFixed(2)}</p>
            <p className="group-user">{props.numberOfUsers}</p>
            </Link>
        </div>
    )
}