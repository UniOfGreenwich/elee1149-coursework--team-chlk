import '../styles/reset.css'; // importing the styles file
import '../styles/home-footer.css'; // importing the styles file

import { Link } from 'react-router-dom';

export function HomeFooter() {
    return (
        <>
            <footer>
                <div className="footer-main">
                    <div className="footer-logo">
                        <div className="logo">
                        <Link to='/'>
                            <img src={require('../assets/Fairshare-logo.png')} alt="logo in white color" />
                        </Link>
                        </div>
                        <p className='tag'>Settle up, stay connected</p>
                    </div>
                    <div className="quick-links">
                        <p className="link-title">Quick Links</p>
                        <ul className="footer-navigation-list">
                            <li className="list-item">
                                <Link to='/'>Home</Link>
                            </li>
                            <li className="list-item">
                                <Link to='/login'>Login</Link>
                            </li>
                            <li className="list-item">
                                <Link to='/sign-up'>Signup</Link>
                            </li>
                            <li className="list-item">
                                <Link to='/contributors'>Contributors</Link>
                            </li>

                        </ul>
                    </div>
                </div>
                <div className="copyright">copyright © 2025. all rights reserved</div>


            </footer>
        </>
    )
}