import React from "react";
import styles from './ProfileInfo.module.css'


const ProfileInfo = (props) => {
    return (
        <div className={styles.profile}>
            <img src="https://cdn.eso.org/images/screen/vlt-mw-potw.jpg" alt="Panorama"/>
        </div>
    )
}

export default ProfileInfo;