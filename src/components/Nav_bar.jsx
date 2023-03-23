import React from "react";
import s from "./Nav_bar.module.css"
console.log(s);

const Nav_bar = () => {
    return (
        <nav className={s.nav}>
            <div className={s.item}>
                <a>Profile</a>
            </div>
            <div className={`${s.item} ${s.active}`}>
                <a>Massages</a>
            </div>
            <div className={s.item}>
                <a>News</a>
            </div>
            <div className={s.item}>
                <a>Music</a>
            </div>
        </nav>

    );
}

export default Nav_bar;