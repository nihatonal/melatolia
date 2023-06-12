import React from 'react';
import { NavLink } from "react-router-dom";



import './NavLinks.css';
function NavLinks(props) {


    return (
        <div className={`navbar ${props.className}`} style={props.style}>
            {props.children}
            <div className={props.sidebar_nav_item_wrapper}><NavLink
                className={({ isActive }) =>
                    isActive ? "nav-item active-nav-item" : "nav-item"
                }
                to="/"
                onClick={props.closeDrawer}
            >
                Home
            </NavLink> </div>
            <div className={props.sidebar_nav_item_wrapper}><NavLink
                className={({ isActive }) =>
                    isActive ? "nav-item active-nav-item" : "nav-item"
                }
                to="/aboutus"
                onClick={props.closeDrawer}
            >
                About Us
            </NavLink> </div>
            <div className={props.sidebar_nav_item_wrapper}><NavLink
                className={({ isActive }) =>
                    isActive ? "nav-item active-nav-item" : "nav-item"
                }
                to="/features"
                onClick={props.closeDrawer}
            >
                Features
            </NavLink> </div>
            <div className={props.sidebar_nav_item_wrapper}><NavLink
                className={({ isActive }) =>
                    isActive ? "nav-item active-nav-item" : "nav-item"
                }
                to="/products"
                onClick={props.closeDrawer}
            >
                Products
            </NavLink> </div>
            <div className={props.sidebar_nav_item_wrapper}><NavLink
                className={({ isActive }) =>
                    isActive ? "nav-item active-nav-item" : "nav-item"
                }
                to="/contact"
                onClick={props.closeDrawer}
            >
                Contact
            </NavLink> </div>


        </div>
    );
}

export default NavLinks;