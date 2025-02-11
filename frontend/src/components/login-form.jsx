import '../styles/login-signup-page.css'
import { Link } from 'react-router-dom';


export function LoginForm() {
    return (
        <>
        <form action="#" className="login-form">
            <div className="input-block">
                <label htmlFor="email">Email Address</label>
                <input type="email" placeholder="Enter your email" id="email"/>
            </div>

            <div className="input-block">
                <label htmlFor="password">Password</label>
                <input type="password" id="password" />
            </div>

            {/* <div className="input-block check-box">
                <input type="checkbox" id="check"/>
                <label htmlFor="check">Keep me signed in</label>
            </div> */}

            <div className="input-block">
                <input type="submit" value='Login' className="submit-button"/>
            </div>

        </form>
        <p>
            <Link to='/sign-up' className='register'>Create an account</Link>
        </p>
        </>
    )
}