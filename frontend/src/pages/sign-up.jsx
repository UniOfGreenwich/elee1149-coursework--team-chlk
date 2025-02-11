import { SignupForm } from "../components/signup-form"
import { Link } from "react-router-dom"

export function SignUp() {
    return (
        <div className="form-page-wrapper">
            <Link to='/'>
                <img src={require('../assets/Fairshare-logo.png')} alt="logo in white" className='logo' />
            </Link>

            <SignupForm />
    </div>
    )
}