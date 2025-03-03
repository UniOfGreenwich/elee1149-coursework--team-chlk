// Styles
import '../styles/dashboard.css'

// Components
import { SideBar } from "../components/dashboard-sidebar"
import { TopBar } from '../components/dashboard-topbar'

export function GroupsDashboard() {
    return (
        <div className="dashboard-wrapper">
            <SideBar />
            <div className="dashboard-content">
                <div className="topbar"><TopBar pageName='Dashboard'/></div>
                <h1>Groups Dashboard</h1>
            </div>
        </div>
    )
}