// Styles
import "../styles/dashboard.css";

import { useLocation, useParams } from "react-router-dom";

// Components
import { Overview } from "../components/dashboard-overview";
import { TopCategories } from "../components/dashboard-top-categories";
import { QuickActions } from "../components/dashboard-quick-actions";
import { RecentExpenses } from "../components/dashboard-recent-expenses";
import { GroupMembers } from "../components/dashboard-group-members";
import { TopBar } from "../components/dashboard-topbar";
import { GroupExpensesData, GroupMembersData } from "../methods/use-axios.ts";

export function GroupsDashboard() {
  let params = useParams();
  const [expensesLoading, expensesData, expensesError, expensesRequest] =
    GroupExpensesData(params.groupId);
  const [
    groupMembersLoading,
    groupMembersData,
    groupMembersError,
    groupMembersRequest,
  ] = GroupMembersData(params.groupId, params.id);
  const location = useLocation();
  const { groupName } = location.state;
  return (
    <div className="dashboard-content">
      <div className="topbar">
        <TopBar pageName={groupName} />
      </div>
      <ul className="dashboard-grid-wrapper">
        <li className="grid-component overview">
          <Overview
            userId={params.id}
            groupId={params.groupId}
            loading={groupMembersLoading}
            data={groupMembersData}
            error={groupMembersError}
          />
        </li>
        <li className="grid-component categories">
          <TopCategories
            userId={params.id}
            groupId={params.groupId}
            loading={expensesLoading}
            data={expensesData}
            error={expensesError}
          />
        </li>
        <li className="grid-component quick-actions">
          <QuickActions userId={params.id} groupId={params.groupId} />
        </li>
        <li className="grid-component recent-expenses">
          <RecentExpenses
            userId={params.id}
            groupId={params.groupId}
            loading={expensesLoading}
            data={expensesData}
            error={expensesError}
          />
        </li>
        <li className="grid-component group">
          <GroupMembers
            userId={params.id}
            groupId={params.groupId}
            loading={groupMembersLoading}
            data={groupMembersData}
            error={groupMembersError}
          />
        </li>
      </ul>
    </div>
  );
}
