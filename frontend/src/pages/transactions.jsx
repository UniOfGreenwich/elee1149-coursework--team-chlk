import '../styles/dashboard.css'
import { SideBar } from "../components/dashboard-sidebar"

export function Transactions() {
    return (
        <div className="dashboard-wrapper">
            <SideBar />
            <div className="dashboard-content">
                <h1>Your Transactions</h1>
            </div>
        </div>
    )
}