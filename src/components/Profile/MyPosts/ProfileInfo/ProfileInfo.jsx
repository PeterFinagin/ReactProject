import React from "react";
import styles from "./ProfileInfo.module.css"


const ProfileInfo = () => {
    return (
        <div>
            <div className={styles.profile}>
                <img src="https://cdn.eso.org/images/screen/vlt-mw-potw.jpg" alt="Panorama"/>
            </div>
            <div className="descriptionBlock">
                ava  description
            </div>
        </div>
    )
}

export default ProfileInfo;
