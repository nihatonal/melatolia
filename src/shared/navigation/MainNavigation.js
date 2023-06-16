import React, { useState } from 'react';
import NavLinks from './NavLinks';


import logo from '../../assets/images/logo.png'
import Hamburger from './Hamburger';
import SideNavBar from './SideNavBar';

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
            <SideNavBar
                openDrawerHandler={openDrawerHandler}
                closeDrawer={closeDrawerHandler}
                drawerIsOpen={drawerIsOpen}
                onClick={() => {
                    openDrawerHandler(false)
                }}
                className={'hide-sidebar'}
            />
            <div className={'main_header'}>
                {/* <ReactSVG src={Logo} /> */}
                <img src={logo} alt='logo' />

                <NavLinks />
                <Hamburger
                    show={drawerIsOpen}
                    onClick={openDrawerHandler}
                />
            </div>

            {/* <Modal showModal={openModal} closeModal={() => { openSignUpModal(false) }} ><SignUp /></Modal> */}

        </div>
    );
}

export default MainNavigation;