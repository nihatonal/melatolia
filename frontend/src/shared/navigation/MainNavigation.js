import React, { useState } from 'react';
import NavLinks from './NavLinks';


import logo from '../../assets/images/logo.png'
import Hamburger from './Hamburger';
import SideDrawer from './SideDrawer';
import Backdrop from '../UI/Backdrop';

import './MainNavigation.css';
function MainNavigation(props) {
    const [drawerIsOpen, setDrawerIsOpen] = useState(false);

    const openDrawerHandler = () => {
        setDrawerIsOpen(!drawerIsOpen);
    };
    const closeDrawerHandler = () => {
        setDrawerIsOpen(false);
    };
    return (
        <div className={'header'}>
            {drawerIsOpen && <Backdrop onClick={closeDrawerHandler} />}
            {<SideDrawer show={drawerIsOpen} onClick={closeDrawerHandler}>
                <NavLinks
                    sidebar_nav_item_wrapper='sidedrawer-navlink_wrapper'
                    className={'sidedrawer-navlinks'}
                    onClick={props.onClick}
                    closeDrawer={closeDrawerHandler}
                />
            </SideDrawer>}

            <div className={'main_header'}>
                <img src={logo} alt='logo' />

                <NavLinks />
                <Hamburger
                    show={drawerIsOpen}
                    onClick={openDrawerHandler}
                />
            </div>
        </div>
    );
}

export default MainNavigation;