import React from "react";
import styles from './Header.module.css'
import {NavLink} from "react-router-dom";


const Header = (props) => {
    return (
        <header className={styles.header}>
            <div>
                <img src="https://cdn.pixabay.com/photo/2016/12/04/17/25/wordpress-1882120_960_720.png" alt="Logo"/>
            </div>
            <div>
                <h1>SPACE COMMUNITY</h1>
            </div>
            <div className={styles.loginBlock}>
                {props.isAuth
                    ? <div>{props.login} - <button onClick={props.logout}>Log out</button></div>
                    : <NavLink to={'/login'}>Login</NavLink>}
            </div>
        </header>
    )

}

export default Header;