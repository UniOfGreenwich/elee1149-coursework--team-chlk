import { SideBarNavItem } from "./dashboard-sidebar-navitem";
import "../styles/dashboard-sidebar.css";
import { Link } from "react-router-dom";
import logo from "../assets/Fairshare-logo.png";
import dashboardIcon from "../assets/dashboard-icon.png";
import expensesIcon from "../assets/expenses-icon.png";
import friendsIcon from "../assets/friends-icon.png";
import groupsIcon from "../assets/groups-icon.png";
import logoutIcon from "../assets/logout-icon.png";
import profilePicture from "../assets/default-profile-picture.png";

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
              <Link to={`/`}>
                <SideBarNavItem
                  navPageName="Dashboard"
                  navIcon={dashboardIcon}
                />
              </Link>
            </li>
            <li className="nav-item">
              <Link to={`/expenses`}>
                <SideBarNavItem navPageName="Expenses" navIcon={expensesIcon} />
              </Link>
            </li>
            <li className="nav-item">
              <Link to={`/friends`}>
                <SideBarNavItem navPageName="Friends" navIcon={friendsIcon} />
              </Link>
            </li>
            <li className="nav-item">
              <Link to={`/groups`}>
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
            <p className="name">{`${token.firstName} ${token.lastName}`}</p>
            <p className="view-profile">View Profile</p>
          </div>
        </div>
      </div>
    </div>
  );
}
