// Styles
import "../styles/dashboard.css";

import { useParams } from "react-router-dom";

// Components
import { Overview } from "../components/dashboard-overview";
import { TopCategories } from "../components/dashboard-top-categories";
import { QuickActions } from "../components/dashboard-quick-actions";
import { RecentExpenses } from "../components/dashboard-recent-expenses";
import { Groups } from "../components/dashboard-all-groups";
import { GroupsData, AllExpenseData, AllMembersData } from "../methods/use-axios.ts";


export function Dashboard() {
  let params = useParams()
  const [groupsLoading, groupsData, groupsError, groupsRequest] = GroupsData(params.id)

  const [expensesLoading, expensesData, expensesError, expensesRequest] = AllExpenseData(params.id)

  const [balancesLoading, balancesData, balancesError, balancesRequest] = AllMembersData(params.id)

  console.log(expensesData)

  return (
        <ul className="dashboard-grid-wrapper">
          <li className="grid-component overview">
            <Overview userId={params.id} loading={balancesLoading} data={balancesData} error={balancesError}/>
          </li>
          <li className="grid-component categories">
            <TopCategories userId={params.id} loading={expensesLoading} data={expensesData} error={expensesError}/>
          </li>
          <li className="grid-component quick-actions">
            <QuickActions />
          </li>
          <li className="grid-component recent-expenses">
            <RecentExpenses userId={params.id} loading={expensesLoading} data={expensesData} error={expensesError}/>
          </li>
          <li className="grid-component group">
            <Groups userId={params.id} loading={groupsLoading} data={groupsData} error={groupsError}/>
          </li>
        </ul>
  );
}