import "../styles/dashboard.css";
import { GroupsList } from "../components/groups-list";
import { useParams } from "react-router-dom";

export function Groups() {
  let params = useParams()
  return (
        <ul className="groups-wrapper">
                  <li className="groups-component-list">
                    <GroupsList userId={params.id}/>
                  </li>
                </ul>
  );
}
