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

export function GroupsDashboard( { setLoggedIn } ) {
  return (
    <div className="dashboard-wrapper">
      <SideBar setLoggedIn={setLoggedIn}/>
      <div className="dashboard-content">
        <div className="topbar">
          <TopBar pageName="Dashboard" />
        </div>
        <ul className="dashboard-grid-wrapper">
          <li className="grid-component overview">
            <Overview />
          </li>
          <li className="grid-component categories">
            <TopCategories />
          </li>
          <li className="grid-component quick-actions">
            <QuickActions />
          </li>
          <li className="grid-component recent-expenses">
            <RecentExpenses />
          </li>
          <li className="grid-component group">
            <GroupMembers />
          </li>
        </ul>
      </div>
    </div>
  );
}
