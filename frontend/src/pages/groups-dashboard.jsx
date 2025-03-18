// Styles
import "../styles/dashboard.css";

// Components
import { SideBar } from "../components/dashboard-sidebar";
import { TopBar } from "../components/dashboard-topbar";
import { Overview } from "../components/dashboard-overview";
import { TopCategories } from "../components/dashboard-top-categories";
import { QuickActions } from "../components/dashboard-quick-actions";
import { RecentExpenses } from "../components/dashboard-recent-expenses";
import { GroupMembers } from "../components/dashboard-group-members";

export function GroupsDashboard(token) {
  return (
    <div className="dashboard-wrapper">
      <SideBar token={token}/>
      <div className="dashboard-content">
        <div className="topbar">
          <TopBar pageName="Dashboard" token={token}/>
        </div>
        <ul className="dashboard-grid-wrapper">
          <li className="grid-component overview">
            <Overview token={token}/>
          </li>
          <li className="grid-component categories">
            <TopCategories token={token}/>
          </li>
          <li className="grid-component quick-actions">
            <QuickActions token={token}/>
          </li>
          <li className="grid-component recent-expenses">
            <RecentExpenses token={token}/>
          </li>
          <li className="grid-component group">
            <GroupMembers token={token}/>
          </li>
        </ul>
      </div>
    </div>
  );
}
