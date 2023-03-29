import React from "react";
import styles from "./Profile.module.css"
import MyPosts from "./MyPosts/MyPosts";


const Profile = () => {
    return (
        <div>
            <div className={styles.profile}>
                <img src="https://cdn.eso.org/images/screen/vlt-mw-potw.jpg" alt="Panorama"/>
            </div>
            <MyPosts/>
        </div>
    )
}

export default Profile;
