import React from "react";
import styles from './Header.module.css'


const Header = () => {
    return (
        <header className={styles.header}>
            <img  src="https://cdn.pixabay.com/photo/2016/12/04/17/25/wordpress-1882120_960_720.png" alt="Logo"/>
        <h1>SPACE COMMUNITY</h1>
        </header>
    )

}

export default Header;