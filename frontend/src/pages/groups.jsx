import { Sidebar } from "../components/sidebar-nav"
import { Topbar } from "../components/topbar"
import { Overview } from "../components/dashboard-overview"
import { TopCategories } from "../components/dashboard-categories"
import { QuickActions } from "../components/dashboard-actions"
import { RecentExpenses } from "../components/dashboard-expenses"
import { GroupMembers } from "../components/dashboard-groupmember"

export function Groups() {
    return (
        <div className="page-wrapper">
            <Sidebar />
            {/* <div className="topbar-nav">
                <Topbar />
                <div className="dashboard-grid">
                    <Overview />
                    <TopCategories />
                    <QuickActions />
                    <RecentExpenses />
                    <GroupMembers />
                </div>
            </div> */}
        </div>
    )
}