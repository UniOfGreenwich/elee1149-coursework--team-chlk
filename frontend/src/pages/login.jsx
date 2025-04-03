// Login Page
import { Link } from "react-router-dom";
import { LoginForm } from "../components/login-form";

import logo from "../assets/Fairshare-logo.png";

export function Login( { setToken, signedUp, setSignedUp} ) {
  return (
    <div className="form-page-wrapper">
      <Link to="/">
        <img src={logo} alt="logo in white" className="logo" />
      </Link>

      <LoginForm setToken={setToken} signedUp={signedUp} setSignedUp={setSignedUp}/>
    </div>
  );
}
