// Components
import { SideBarNavItem } from "./dashboard-sidebar-navitem";

// Styles
import "../styles/dashboard-sidebar.css";

// Link Router
import { Link, useNavigate } from "react-router-dom";

// Images
import logo from "../assets/Fairshare-logo.png";
import dashboardIcon from "../assets/dashboard-icon.png";
import expensesIcon from "../assets/expenses-icon.png";
import transactionsIcon from "../assets/transactions-icon.png";
import friendsIcon from "../assets/friends-icon.png";
import groupsIcon from "../assets/groups-icon.png";
import logoutIcon from "../assets/logout-icon.png";
import profilePicture from "../assets/profile-picture.png";

export function SideBar( { token, setToken } ) {
  const logout = () => {
    sessionStorage.removeItem('token')
    setToken(null)
  }
  return (
    <div className="sidebar-wrapper">
      <div className="sidebar-top">
        <div className="logo-container">
          <img src={logo} alt="logo in white color" className="sidebar-logo" />
        </div>
        <div className="side-bar-navigation">
          <ul className="sidebar-navigation-list">
            <li className="nav-item">
              <Link to={`/user/${token.userId}/groups-dashboard`}>
                <SideBarNavItem
                  navPageName="Dashboard"
                  navIcon={dashboardIcon}
                />
              </Link>
            </li>
            <li className="nav-item">
              <Link to={`/user/${token.userId}/expenses`}>
                <SideBarNavItem navPageName="Expenses" navIcon={expensesIcon} />
              </Link>
            </li>
            <li className="nav-item">
              <Link to={`/user/${token.userId}/friends`}>
                <SideBarNavItem navPageName="Friends" navIcon={friendsIcon} />
              </Link>
            </li>
            <li className="nav-item">
              <Link to={`/user/${token.userId}/groups`}>
                <SideBarNavItem navPageName="Groups" navIcon={groupsIcon}/>
              </Link>
            </li>
          </ul>
        </div>
      </div>

      <div className="sidebar-footer">
        <div className="logout-button" onClick={logout}>
          <Link to="/login">
            <SideBarNavItem navPageName="Logout" navIcon={logoutIcon} />
          </Link>
        </div>
        <div className="profile-section">
          <img
            src={profilePicture}
            alt="user profile picture"
            className="profile-image"
          />
          <div className="profile-user">
            <p className="name">Hamza Khan</p>
            <p className="view-profile">View Profile</p>
          </div>
        </div>
      </div>
    </div>
  );
}
