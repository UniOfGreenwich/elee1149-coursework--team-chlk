import "../styles/groups.css"
import {format} from "date-fns"

export function GroupsListItem(props) {
    return (
        <div className="group-list-item">
            <p className="group-name">{props.groupName}</p>
            <p className="group-date-created">{format(props.dateCreated, "dd MMM yyyy")}</p>
            <p className="group-last-updated">{format(props.updatedAt, "dd MMM yyyy")}</p>
            <p className="group-total-spent">£{props.totalSpent.toFixed(2)}</p>
            <p className="group-user">{props.numberOfUsers}</p>
        </div>
    )
}