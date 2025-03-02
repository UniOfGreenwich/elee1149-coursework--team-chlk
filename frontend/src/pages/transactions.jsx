import '../styles/dashboard.css'
import { SideBar } from "../components/dashboard-sidebar"
import { TopBar } from '../components/dashboard-topbar'

export function Transactions() {
    return (
        <div className="dashboard-wrapper">
            <SideBar />
            <div className="dashboard-content">
                <div className="topbar"><TopBar pageName='Transactions'/></div>
                <h1>Your Transactions</h1>
            </div>
        </div>
    )
}