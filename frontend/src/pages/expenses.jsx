import "../styles/dashboard.css";
import { SideBar } from "../components/dashboard-sidebar";
import { TopBar } from "../components/dashboard-topbar";

export function Expenses(token) {
  return (
    <div className="dashboard-wrapper">
      <SideBar token={token}/>
      <div className="dashboard-content">
        <div className="topbar">
          <TopBar pageName="Expenses" token={token}/>
        </div>
        <h1>Your Expenses</h1>
      </div>
    </div>
  );
}
