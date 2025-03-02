import '../styles/dashboard.css'
import { SideBar } from "../components/dashboard-sidebar"
import { TopBar } from '../components/dashboard-topbar'

export function Expenses() {
    return (
        <div className="dashboard-wrapper">
            <SideBar />
            <div className="dashboard-content">
                <div className="topbar"><TopBar pageName='Expenses'/></div>
                <h1>Your Expenses</h1>
            </div>
        </div>
    )
}