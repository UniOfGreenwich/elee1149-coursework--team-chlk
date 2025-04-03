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
  const [error, setError] = useState();
  let navigate = useNavigate();

  const handleSubmit = async e => {
    e.preventDefault();
    const signUp = await userSignUp({
      "firstName": firstName,
      "lastName": lastName,
      "email": email,
      "username": username,
      "password": password
    });
    if(signUp.success) {
      setSignedUp(signUp)
      navigate(`/home/`)
    } else {
      setError(signUp.message)
    }
    
    console.log(signUp)
  }


  return (
    <>
    {error ? 
    <Snackbar autoHideDuration={6000}>
      <Alert severity="error">{error}</Alert>
      </Snackbar> 
      : null}
      <form action="#" className="login-form" onSubmit={handleSubmit}>
          <div className="input-block">
            <label htmlFor="fullName">Name</label>
            <div className="full-name-block">
              <input className="first-name" type="text" placeholder="Enter your first name" id="firstName" onChange={e => setFirstName(e.target.value)}/>
              <input className="last-name"type="text" placeholder="Enter your last name" id="lastName" onChange={e => setLastName(e.target.value)}/>
            </div>
          </div>

        <div className="input-block">
          <label htmlFor="email">Email Address</label>
          <input type="email" placeholder="Enter your email" id="email" onChange={e => setEmail(e.target.value)}/>
        </div>

        <div className="input-block">
          <label htmlFor="username">Username</label>
          <input type="text" placeholder="Enter a username" id="username" onChange={e => setUsername(e.target.value)}/>
        </div>

        <div className="input-block">
          <label htmlFor="password">Password</label>
          <input type="password" id="password" onChange={e => setPassword(e.target.value)}/>
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
