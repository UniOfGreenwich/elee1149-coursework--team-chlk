import "../styles/dashboard.css";
import { SideBar } from "../components/dashboard-sidebar";
import { TopBar } from "../components/dashboard-topbar";

export function Groups() {
  return (
    <div className="dashboard-wrapper">
      <SideBar />
      <div className="dashboard-content">
        <div className="topbar">
          <TopBar pageName="Groups" />
        </div>
        <h1>Your Groups</h1>
      </div>
    </div>
  );
}
