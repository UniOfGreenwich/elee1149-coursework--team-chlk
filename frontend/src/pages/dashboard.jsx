// Styles
import "../styles/dashboard.css";

import { useParams } from "react-router-dom";

// Components
import { Overview } from "../components/dashboard-overview";
import { TopCategories } from "../components/dashboard-top-categories";
import { QuickActions } from "../components/dashboard-quick-actions";
import { RecentExpenses } from "../components/dashboard-recent-expenses";
import { Groups } from "../components/dashboard-all-groups";

export function Dashboard() {
  let params = useParams()
  return (
        <ul className="dashboard-grid-wrapper">
          <li className="grid-component overview">
            <Overview userId={params.id}/>
          </li>
          <li className="grid-component categories">
            <TopCategories userId={params.id}/>
          </li>
          <li className="grid-component quick-actions">
            <QuickActions />
          </li>
          <li className="grid-component recent-expenses">
            <RecentExpenses userId={params.id}/>
          </li>
          <li className="grid-component group">
            <Groups userId={params.id}/>
          </li>
        </ul>
  );
}