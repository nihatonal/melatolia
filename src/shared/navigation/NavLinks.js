import React from 'react';
import { NavLink } from "react-router-dom";



import './NavLinks.css';
function NavLinks(props) {


    return (
        <div className={`navbar ${props.className}`} style={props.style}>
            {props.children}
            <NavLink
                className={({ isActive }) =>
                    isActive ? "nav-item active-nav-item" : "nav-item"
                }
                to="/"
                onClick={props.closeDrawer}
            >
                Home
            </NavLink>
            <NavLink
                className={({ isActive }) =>
                    isActive ? "nav-item active-nav-item" : "nav-item"
                }
                to="/aboutus"
                onClick={props.closeDrawer}
            >
                About Us
            </NavLink>
            <NavLink
                className={({ isActive }) =>
                    isActive ? "nav-item active-nav-item" : "nav-item"
                }
                to="/features"
                onClick={props.closeDrawer}
            >
                Features
            </NavLink>
            <NavLink
                className={({ isActive }) =>
                    isActive ? "nav-item active-nav-item" : "nav-item"
                }
                to="/products"
                onClick={props.closeDrawer}
            >
                Products
            </NavLink>
            <NavLink
                className={({ isActive }) =>
                    isActive ? "nav-item active-nav-item" : "nav-item"
                }
                to="/contact"
                onClick={props.closeDrawer}
            >
                Contact
            </NavLink>


        </div>
    );
}

export default NavLinks;