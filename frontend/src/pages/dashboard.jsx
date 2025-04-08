import "../styles/dashboard.css";
import { useParams } from "react-router-dom";
import { Overview } from "../components/dashboard-overview";
import { TopCategories } from "../components/dashboard-top-categories";
import { QuickActions } from "../components/dashboard-quick-actions";
import { RecentExpenses } from "../components/dashboard-recent-expenses";
import { Groups } from "../components/dashboard-all-groups";
import { GroupsData, AllExpenseData, AllMembersData } from "../methods/use-axios.ts";
import { TopBar } from "../components/dashboard-topbar";
import { useCallback, useEffect } from "react";

export function Dashboard({userId}) {

  const [groupsLoading, groupsData, groupsError, groupsRequest] = GroupsData(userId)

  const [expensesLoading, expensesData, expensesError, expensesRequest] = AllExpenseData(userId)

  const [balancesLoading, balancesData, balancesError, balancesRequest] = AllMembersData(userId)

  return (
    <div className="dashboard-content">
    <div className="topbar">
      <TopBar pageName="Dashboard" />
    </div>
        <ul className="dashboard-grid-wrapper">
          <li className="grid-component overview">
            <Overview loading={balancesLoading} data={balancesData} error={balancesError}/>
          </li>
          <li className="grid-component categories">
            <TopCategories userId={userId} loading={expensesLoading} data={expensesData} error={expensesError}/>
          </li>
          <li className="grid-component quick-actions">
            <QuickActions userId={userId}/>
          </li>
          <li className="grid-component recent-expenses">
            <RecentExpenses userId={userId} loading={expensesLoading} data={expensesData} error={expensesError}/>
          </li>
          <li className="grid-component group">
            <Groups userId={userId} loading={groupsLoading} data={groupsData} error={groupsError}/>
          </li>
        </ul>
        </div>
  );
}