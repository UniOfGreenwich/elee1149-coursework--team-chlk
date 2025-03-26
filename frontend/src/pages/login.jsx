// Login Page
import { Link } from "react-router-dom";
import { LoginForm } from "../components/login-form";

import logo from "../assets/Fairshare-logo.png";

export function Login( { setToken } ) {
  return (
    <div className="form-page-wrapper">
      <Link to="/">
        <img src={logo} alt="logo in white" className="logo" />
      </Link>

      <LoginForm setToken={setToken}/>
    </div>
  );
}
