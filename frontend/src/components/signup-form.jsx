import "../styles/login-signup-page.css";
import { Link, useNavigate } from "react-router-dom";
import PropTypes from 'prop-types';
import { useState } from 'react';
import axios from "axios";
import { Alert, Snackbar } from "@mui/material";

async function userSignUp(credentials) {
  return axios.post(
    "users/newUser",
    credentials,
    {'Content-Type': 'application/json'}
  )
  .then(response => response.data)
}

export function SignupForm({setSignedUp}) {
  const [firstName, setFirstName] = useState();
  const [lastName, setLastName] = useState();
  const [email, setEmail] = useState();
  const [username, setUsername] = useState();
  const [password, setPassword] = useState();
  const [passwordCheck, setPasswordCheck] = useState()
  const [error, setError] = useState();
  let navigate = useNavigate();

  const handleSubmit = async e => {
    e.preventDefault();
    if (password === passwordCheck) {
      const signUp = await userSignUp({
        "firstName": firstName,
        "lastName": lastName,
        "email": email,
        "username": username,
        "password": password
      });
      if(signUp.success) {
        setSignedUp(signUp)
        navigate(`/login`)
      } else {
        setError(signUp.message)
      }

      console.log(signUp)
    
    } else {
      setError("Passwords do not match")
    }
  }


  return (
    <>
      {error ? 
        <p className="error">{error}</p>
      : null}
      <form action="#" className="login-form" onSubmit={handleSubmit}>
          <div className="input-block">
            <label htmlFor="fullName">Name</label>
            <div className="split-block">
              <input className="left-input" type="text" placeholder="Enter your first name" id="firstName" required={true} onChange={e => setFirstName(e.target.value)}/>
              <input className="right-input"type="text" placeholder="Enter your last name" id="lastName" required={true} onChange={e => setLastName(e.target.value)}/>
            </div>
          </div>

        <div className="input-block">
          <label htmlFor="email">Email Address</label>
          <input type="email" placeholder="Enter your email" id="email" required={true} onChange={e => setEmail(e.target.value)}/>
        </div>

        <div className="input-block">
          <label htmlFor="username">Username</label>
          <input type="text" placeholder="Enter a username" id="username" required={true} onChange={e => setUsername(e.target.value)}/>
        </div>

        <div className="input-block">
          <label htmlFor="password">Password</label>
          <div className="split-block">
            <input className="left-input" type="password" id="password" required={true} onChange={e => setPassword(e.target.value)}/>
            <input className="right-input" type="password" placeholder="Re-enter password" id="password" required={true} onChange={e => setPasswordCheck(e.target.value)}/>
          </div>

        </div>

        <div className="input-block">
          <input
            type="submit"
            value="Create an account"
            className="submit-button"
          />
        </div>

        <p className="to-login">
          <Link to="/login" className="register">
            Already a member? Login Instead
          </Link>
        </p>
      </form>
    </>
  );
}

SignupForm.propTypes = {
  setSignedUp: PropTypes.func.isRequired
}
