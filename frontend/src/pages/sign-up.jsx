import { SignupForm } from "../components/signup-form";
import { Link } from "react-router-dom";

import logo from "../assets/Fairshare-logo.png";

export function SignUp() {
  return (
    <div className="form-page-wrapper">
      <Link to="/">
        <img src={logo} alt="logo in white" className="logo" />
      </Link>

      <SignupForm />
    </div>
  );
}
