import React from "react";
import styles from "./Navbar.module.css"
import {NavLink} from "react-router-dom";

const Navbar = () => {
    const activeLinkStyle = ({isActive}) => (
        {color: isActive ? 'gold' : 'white'}
    )

    return (
        <nav className={styles.nav}>
            <div className={styles.item}>
                <NavLink to="/profile"   style={activeLinkStyle}>Profile</NavLink>
            </div>
            <div className={styles.item}>
                <NavLink to="/dialogs"  style={activeLinkStyle}>Messages</NavLink>
            </div>
            <div className={styles.item}>
                <NavLink to="/news"  style={activeLinkStyle}>News</NavLink>
            </div>
            <div className={styles.item}>
                <NavLink to="/settings"  style={activeLinkStyle}>Settings</NavLink>
            </div>
        </nav>
    )
}

export default Navbar;



// import React from 'react';
// import s from './Navbar.module.css';
// import {NavLink} from "react-router-dom";
//
// const Navbar = () => {
//     return (
//         <nav className={s.nav}>
//             <div className={s.item}>
//                 <NavLink to="/profile" activeClassName={s.activeLink}>Profile</NavLink>
//             </div>
//             <div className={`${s.item} ${s.active}`}>
//                 <NavLink to="/dialogs" activeClassName={s.activeLink}>Messages</NavLink>
//             </div>
//             <div className={s.item}>
//                 <a>News</a>
//             </div>
//             <div className={s.item}>
//                 <a>Music</a>
//             </div>
//             <div className={s.item}>
//                 <a>Settings</a>
//             </div>
//         </nav>
//     )
// }
//
// export default Navbar;