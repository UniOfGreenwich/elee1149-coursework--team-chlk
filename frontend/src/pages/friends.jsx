import '../styles/dashboard.css'
import { SideBar } from "../components/dashboard-sidebar"
import { TopBar } from '../components/dashboard-topbar'

export function Friends() {
    return (
        <div className="dashboard-wrapper">
            <SideBar />
            <div className="dashboard-content">
                <div className="topbar"><TopBar pageName='Friends'/></div>
                <h1>Your Friends</h1>
            </div>
        </div>
    )
}