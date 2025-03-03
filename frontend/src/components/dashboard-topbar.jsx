import notificationIcon from '../assets/notification-icon.png'
import searchIcon from '../assets/search-icon.png'
import dateIcon from '../assets/date-arrow-icon.png'

import '../styles/dashboard-topbar.css'


export function TopBar(props) {

    const today = new Date();
    const formattedDate = new Intl.DateTimeFormat('en-GB').format(today); // UK format (DD/MM/YYYY)

    return (
        <div className="topbar-container">
            <div className="page-title">
                <h2 className="title">{props.pageName}</h2>
                <p className="date"><img src={dateIcon} alt="" />{formattedDate}</p>
            </div>
            <div className="search-container">
                <img src={notificationIcon} alt="notification icon" className='notification-icon'/>
                <input type="text" placeholder='Search here' className='dashboard-search'/>
            </div>
        </div>
    )
}
