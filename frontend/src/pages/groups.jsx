import '../styles/dashboard.css'
import { SideBar } from "../components/dashboard-sidebar"

export function Groups() {
    return (
        <div className="dashboard-wrapper">
            <SideBar />
            <div className="dashboard-content">
                <h1>Your Groups</h1>
            </div>
        </div>
    )
}