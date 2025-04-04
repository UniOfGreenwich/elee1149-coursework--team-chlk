// Styles
import "../styles/dashboard.css";

import { useParams } from "react-router-dom";

// Components
import { Overview } from "../components/dashboard-overview";
import { TopCategories } from "../components/dashboard-top-categories";
import { QuickActions } from "../components/dashboard-quick-actions";
import { RecentExpenses } from "../components/dashboard-recent-expenses";
import { GroupMembers } from "../components/dashboard-group-members";

export function GroupsDashboard() {
  let params = useParams();
  console.log(params.groupId);
  return (
    <ul className="dashboard-grid-wrapper">
      <li className="grid-component overview">
        <Overview userId={params.id} groupId={params.groupId} />
      </li>
      <li className="grid-component categories">
        <TopCategories userId={params.id} groupId={params.groupId} />
      </li>
      <li className="grid-component quick-actions">
        <QuickActions userId={params.id} groupId={params.groupId} />
      </li>
      <li className="grid-component recent-expenses">
        <RecentExpenses userId={params.id} groupId={params.groupId} />
      </li>
      <li className="grid-component group">
        <GroupMembers userId={params.id} groupId={params.groupId} />
      </li>
    </ul>
  );
}
