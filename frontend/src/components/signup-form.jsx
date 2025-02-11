import '../styles/login-signup-page.css'
import { Link } from 'react-router-dom';


export function SignupForm() {
    return (
        <>
        <form action="#" className="login-form">
            <div className="input-block">
                <label htmlFor="name">Name</label>
                <input type="text" placeholder="Enter name" id="name"/>
            </div>

            <div className="input-block">
                <label htmlFor="email">Email Address</label>
                <input type="email" placeholder="Enter your email" id="email"/>
            </div>

            <div className="input-block">
                <label htmlFor="password">Password</label>
                <input type="password" id="password" />
            </div>

            <div className="input-block">
                <input type="submit" value='Create an account' className="submit-button"/>
            </div>

            <p className='to-login'>
                <Link to='/login' className='register'>Already a member? Login Instead</Link>
            </p>

        </form>
        </>
    )
}