// Styles
import '../styles/dashboard.css'

// Components
import { SideBar } from "../components/dashboard-sidebar"

export function GroupsDashboard() {
    return (
        <div className="dashboard-wrapper">
            <SideBar />
            <div className="dashboard-content">
                <h1>Groups Dashboard</h1>
            </div>
        </div>
    )
}