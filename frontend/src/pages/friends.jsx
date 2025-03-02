import '../styles/dashboard.css'
import { SideBar } from "../components/dashboard-sidebar"

export function Friends() {
    return (
        <div className="dashboard-wrapper">
            <SideBar />
            <div className="dashboard-content">
                <h1>Your Friends</h1>
            </div>
        </div>
    )
}