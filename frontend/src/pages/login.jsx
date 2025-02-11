// Login Page
import { Link } from 'react-router-dom'
import { LoginForm } from "../components/login-form"

export function Login() {
    return (
        <div className="form-page-wrapper">
            <Link to='/'>
                <img src={require('../assets/Fairshare-logo.png')} alt="logo in white" className='logo' />
            </Link>

            <LoginForm />
        </div>

    )
}