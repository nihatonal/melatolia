import React from 'react';
import NavLinks from './NavLinks';
import './SideNavBar.css';
function SideNavBar(props) {

    return (
        <div className={props.drawerIsOpen
            ? `sidebar_wrapper open_sidebar` :
            `sidebar_wrapper close_sidebar ${props.className}`}
        >
            <NavLinks
                // style={props.drawerIsOpen ? { top: 0 } : null}
                sidebar_nav_item_wrapper='sidebar_nav_item_wrapper'
                className='sidebar-navlinks'
                onClick={props.onClick}
                closeDrawer={props.closeDrawer}
            />
        </div>
    );
}

export default SideNavBar;