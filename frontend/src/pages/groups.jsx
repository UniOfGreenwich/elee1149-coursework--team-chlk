import "../styles/dashboard.css";
import { SideBar } from "../components/dashboard-sidebar";
import { TopBar } from "../components/dashboard-topbar";

export function Groups(token) {
  return (
    <div className="dashboard-wrapper">
      <SideBar token={token}/>
      <div className="dashboard-content">
        <div className="topbar">
          <TopBar pageName="Groups" token={token}/>
        </div>
        <h1>Your Groups</h1>
      </div>
    </div>
  );
}
