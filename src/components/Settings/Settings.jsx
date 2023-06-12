import React from "react";
import styles from './Settings.module.css'
import {NavLink} from "react-router-dom";


const SettingsB = (props) => {
    return (
        <div className={styles.settings}>
            <div>
                <NavLink to="/settings_y"><button>Yellow</button></NavLink>
            </div>
            <div>
                <NavLink to="/settings_b"><button>Blue</button></NavLink>
            </div>
        </div>
    )

}

export default SettingsB;