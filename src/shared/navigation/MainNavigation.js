import React, { useState, useEffect } from 'react';
import NavLinks from './NavLinks';


import logo from '../../assets/images/logo.png'
import Hamburger from './Hamburger';
import SideNavBar from './SideNavBar';
// import Modal from '../UI/Modal'

import './MainNavigation.css';
function MainNavigation(props) {
    const [scrolled, setScrolled] = useState(false);
    const [drawerIsOpen, setDrawerIsOpen] = useState(false);

    const openDrawerHandler = () => {
        setDrawerIsOpen(!drawerIsOpen);
    };
    const closeDrawerHandler = () => {
        setDrawerIsOpen(false);
    };

    useEffect((_) => {
        const handleScroll = (_) => {
            if (window.pageYOffset > 90) {
                setScrolled(true);
            } else {
                setScrolled(false);
            }
        };
        window.addEventListener("scroll", handleScroll);
        return (_) => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);



    return (
        <div className={scrolled ? 'header header_fixed' : 'header'}>
            <SideNavBar
                openDrawerHandler={openDrawerHandler}
                closeDrawer={closeDrawerHandler}
                drawerIsOpen={drawerIsOpen}
                onClick={() => {
                    openDrawerHandler(false)
                }}
                className={'hide-sidebar'}
            />
            <div className={scrolled ? "main_header main_header_fixed" : 'main_header'}>
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