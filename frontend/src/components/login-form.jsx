import "../styles/login-signup-page.css";
import { Link, useNavigate } from "react-router-dom";
import PropTypes from 'prop-types';
import { useState } from 'react';
import axios from "axios";
import eyeIcon from "../assets/eye-icon.png"
import eyeOffIcon from "../assets/eye-off-icon.png"
import { Button, Dialog } from "@mui/material";

async function userLogin(credentials) {
  return axios.post(
    "users/login",
    credentials,
    {'Content-Type': 'application/json'}
  )
  .then(response => response.data)
}

export function LoginForm( { setToken } ) {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [error, setError] = useState();
  const [textboxType, setTextboxType] = useState('password')
  const [iconName, setIconName] = useState(eyeIcon)
  let navigate = useNavigate();

  const handleClick = () => {
    setTextboxType(textboxType === 'password' ? 'text' : 'password')
    setIconName(iconName === eyeIcon ? eyeOffIcon : eyeIcon)
  }

  const handleSubmit = async e => {
    e.preventDefault();
    const token = await userLogin({
      "email": email,
      "password": password
    });
    if(token.success) {
      setToken(token)
      navigate(`/user/${token.userId}`)
    } else {
      setError(token.message)
    }
    
    console.log(token)
  }

  return (
    <>
      {error ?
        <p className="error">{error}</p>
      : null}
      {signedUp ?
        <p className="signed-up">{`${signedUp.message} Please login`}</p>
      : null} 
      <form action="#" className="login-form" onSubmit={handleSubmit}>
        <div className="input-block">
          <label htmlFor="email">Email Address</label>
          <input type="email" placeholder="Enter your email" id="email" onChange={e => setEmail(e.target.value)}/>
        </div>

        <div className="input-block">
          <label htmlFor="password">Password</label>
          <div className="input-with-button">
            <input type={textboxType} id="password" onChange={e => setPassword(e.target.value)}/>
            <img src={iconName} alt="" onClick={handleClick}/>
          </div>
        </div>

        {/* <div className="input-block check-box">
                <input type="checkbox" id="check"/>
                <label htmlFor="check">Keep me signed in</label>
            </div> */}

        <div className="input-block">
          <input type="submit" value="Login" className="submit-button" />
        </div>
      </form>
      <p>
        <Link to="/sign-up" className="register">
          Create an account
        </Link>
      </p>
    </>
  );
}

LoginForm.propTypes = {
  setToken: PropTypes.func.isRequired
}
