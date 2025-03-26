import "../styles/dashboard-all-groups.css";
import { format } from "date-fns";

export function GroupsRow(props) {
  return (
    <div className="group-row">
        <div className="group-details">
            <p className="group-name">{props.name}</p>
            <p className="group-created">{`Date Created - ${format(props.created, "dd MMM yyyy")}`}</p>  
        </div>
        <div className="group-members-box">
            <p className="group-members">{props.members}</p>
        </div>
    </div>
  );
}
