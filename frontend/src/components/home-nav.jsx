import "../styles/home-nav.css"; 
import "../styles/reset.css"; 
import { Link } from "react-router-dom";

import logo from "../assets/Fairshare-logo.png";

export function HomeNav() {
  return (
    <>
      <header>
        <div className="logo">
          <Link to="/">
            <img src={logo} alt="logo in white color" />
          </Link>
        </div>
        <ul className="navigation-list">
          <li className="list-item">
            <Link to="/sign-up" className="nav-button secondary-button">
              Sign up
            </Link>
          </li>
          <li className="list-item">
            <Link to="/login" className="nav-button primary-button">
              Log in
            </Link>
          </li>
        </ul>
      </header>
    </>
  );
}
