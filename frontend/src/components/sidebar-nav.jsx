import '../styles/reset.css'; // importing the styles file
import '../styles/sidebar-nav.css'; // importing the styles file

import { Link } from 'react-router-dom';

export function Sidebar() {
    return (
        <>
        <header>
            <div className="logo">
                <Link to='/'>
                    <img src={require('../assets/Fairshare-logo.png')} alt="logo in white color" />
                </Link>
            </ div>
        </header>
        </>
    )
}