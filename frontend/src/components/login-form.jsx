import "../styles/login-signup-page.css";
import { Link, useNavigate } from "react-router-dom";
import PropTypes from 'prop-types';
import { useState } from 'react';
import axios from "axios";

async function userLogin(credentials) {
  return axios.post(
    "users/login",
    credentials,
    {'Content-Type': 'application/json'}
  )
  .then(response => response.data)
}

export function LoginForm( { setToken, signedUp, setSignedUp} ) {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [error, setError] = useState();
  let navigate = useNavigate();

  const handleSubmit = async e => {
    setSignedUp(undefined)
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
    // <Snackbar autoHideDuration={6000}>
      <p className="error">{error}</p>
      // {/* <Alert severity="error">{error}</Alert> */}
      // {/* </Snackbar>  */}
      : null}
                {signedUp ?
    // <Snackbar autoHideDuration={6000}>
      <p className="signed-up">{`${signedUp.message} please log in`}</p>
      // {/* <Alert severity="error">{error}</Alert> */}
      // {/* </Snackbar>  */}
      : null}
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
  setToken: PropTypes.func.isRequired,
  setSignedUp: PropTypes.func.isRequired
}
