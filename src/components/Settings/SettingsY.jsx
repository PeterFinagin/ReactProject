import React from "react";
import styles from './SettingsY.module.css'
import {NavLink} from "react-router-dom";


const SettingsY = (props) => {
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

export default SettingsY;