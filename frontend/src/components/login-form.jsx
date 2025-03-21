import "../styles/login-signup-page.css";
import { Link, useNavigate } from "react-router-dom";
import PropTypes from 'prop-types';
import { useState } from 'react';

async function userLogin(credentials) {
  return fetch('http://localhost:8080/users/login', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(credentials)
  })
  .then(data => data.json())
}

export function LoginForm( { setToken, setLoggedIn} ) {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [error, setError] = useState();
  let navigate = useNavigate();

  const handleSubmit = async e => {
    e.preventDefault();
    const token = await userLogin({
      "email": email,
      "password": password
    });
    if(token.success) {
      setToken(token)
      setLoggedIn(true)
      navigate("/Groups-Dashboard")
    } else {
      setError(token.message)
    }
    
    console.log(token)
  }

  return (
    <>
      <p className="invalid-login">{error}</p>
      <form action="#" className="login-form" onSubmit={handleSubmit}>
        <div className="input-block">
          <label htmlFor="email">Email Address</label>
          <input type="email" placeholder="Enter your email" id="email" onChange={e => setEmail(e.target.value)}/>
        </div>

        <div className="input-block">
          <label htmlFor="password">Password</label>
          <input type="password" id="password" onChange={e => setPassword(e.target.value)}/>
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
