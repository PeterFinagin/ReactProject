import React from "react";
import styles from './Navbar.module.css';
import {NavLink} from "react-router-dom";



const Navbar = (props) => {
    let linkClass = ({ isActive }) =>
        isActive ? styles.active : styles.item

    return (
        <nav className={styles.nav}>
            <div>
                <NavLink className={linkClass}  to="/profile">Profile</NavLink>
            </div>
            <div>
                <NavLink className={linkClass} to="/massages">Messages</NavLink>
            </div>
            <div>
                <NavLink className={linkClass} to="/settings">Settings</NavLink>
            </div>
            <div>
                <NavLink className={linkClass} to="/users">Users</NavLink>
            </div>
            <div>
                <NavLink className={linkClass} to="/login">Login</NavLink>
            </div>
        </nav>
    )
}

export default Navbar;