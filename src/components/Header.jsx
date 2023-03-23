import React from "react";
import s from "./Header.module.css"

const Header = () => {
    return (
        <header className={s.header}>
            <img className="img_header" src="https://www.logodesign.net/logo/night-view-with-bonfire-and-pine-trees-6161ld.png?nwm=1&nws=1&industry=All&sf=" alt="React Logo"/>
        </header>
    );
}

export default Header;