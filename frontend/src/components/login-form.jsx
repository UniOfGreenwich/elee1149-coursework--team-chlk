import "../styles/login-signup-page.css";
import { Link, useNavigate } from "react-router-dom";
import PropTypes from 'prop-types';
import { useEffect, useState, useCallback } from 'react';
import eyeIcon from "../assets/eye-icon.png"
import eyeOffIcon from "../assets/eye-off-icon.png"
import { LoginRequest } from "../methods/use-axios.ts";
import { showErrorToast, showSuccessToast } from "../methods/http-error-handler";

export function LoginForm( { setToken } ) {
  const [trigger, setTrigger] = useState(false)
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [textboxType, setTextboxType] = useState('password')
  const [iconName, setIconName] = useState(eyeIcon)
  let navigate = useNavigate();

  const handleClick = () => {
    setTextboxType(textboxType === 'password' ? 'text' : 'password')
    setIconName(iconName === eyeIcon ? eyeOffIcon : eyeIcon)
  }

  const payload = {
    "email": email,
    "password": password
  }

  const [loading, data, error, request, setData] = LoginRequest(payload)
  if(trigger) {
    if(data && JSON.stringify(data) !== '[]' ) {
      if(data.success) {
        setToken(data)
        showSuccessToast(`${data.message}, welcome ${data.firstName}`)
        navigate(`/`)
      } else {
        showErrorToast(data.message)
        setTrigger(false)
        setData([])
      }
    }
  }

  const sendLogin = useCallback(() => {
    request()
    })

  useEffect(() => {
    if (trigger) {
      sendLogin()
    }
  }, [trigger])

  const handleSubmit = async e => {
    e.preventDefault()
    setTrigger(true)
  }

  return (
    <>
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
}
