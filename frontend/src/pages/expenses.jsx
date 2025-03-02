import '../styles/dashboard.css'
import { SideBar } from "../components/dashboard-sidebar"

export function Expenses() {
    return (
        <div className="dashboard-wrapper">
            <SideBar />
            <div className="dashboard-content">
                <h1>Your Expenses</h1>
            </div>
        </div>
    )
}