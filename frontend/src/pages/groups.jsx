import "../styles/dashboard.css";
import { GroupsList } from "../components/groups-list";
import { useParams } from "react-router-dom";

export function Groups() {
  let params = useParams()
  return (
    <div className="groups-wrapper">
      <div className="groups-header">
        <h1 className="groups-title">Groups</h1>
        <p className="add-group-button">+ New Group</p>
      </div>
      <div className="groups-list-wrapper">
        <p className="group-members-title">No. of Members</p>
        <ul className="groups-component">
          <li className="groups-component-list">
            <GroupsList userId={params.id}/>
          </li>
        </ul>
      </div>
    </div>

  );
}
