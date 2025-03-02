export function SideBarNavItem(props) {

    return (
        <div className="nav-element">
            <img src={props.navIcon} alt="" />
            {props.navPageName}
        </div>
    )
}