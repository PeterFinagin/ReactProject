import React from "react";
import styles from './Navbar.module.css';
import {NavLink} from "react-router-dom";



const Navbar = (props) => {
        return (
    <nav className={styles.nav}>
            <div className={styles.item}>
                <NavLink to="/profile">Profile</NavLink>
            </div>
            <div className={styles.item}>
                <NavLink to="/massages">Messages</NavLink>
            </div>
            <div className={styles.item}>
                <NavLink to="/news">News</NavLink>
            </div>
            <div className={styles.item}>
                <NavLink to="/settings">Settings</NavLink>
            </div>
        </nav>
        )
}

export default Navbar;