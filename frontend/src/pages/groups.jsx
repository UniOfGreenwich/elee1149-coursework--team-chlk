import "../styles/dashboard.css";
import { GroupsList } from "../components/groups-list";
import { useParams } from "react-router-dom";
import { GroupsData } from "../methods/use-axios.ts";

export function Groups() {
  let params = useParams()
  const [loading, data, error, request] = GroupsData(params.id)

  console.log(data.entries())
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
            <GroupsList userId={params.id} loading={loading} data={data} error={error}/>
          </li>
        </ul>
      </div>
    </div>

  );
}
