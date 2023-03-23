import React from "react";
import s from "./Profile.module.css"

const Profile = () => {
    return (
        <div className={s.profile}>
            <div>
                <img className="img_main" src="https://www.shutterstock.com/image-illustration/panorama-distant-planet-system-space-600w-1030734604.jpg" alt=""/>
            </div>
            <div className="ava_description">
                <img className="img_earth" src="https://images.all-free-download.com/images/graphicwebp/earth_blue_planet_globe_215578.webp" alt=""/>
            </div>
            <div className={"posts"}>
                <div className={s.item}>New post</div>
                <div className={s.item}>Post 1</div>
                <div className={s.item}>Post 2</div>
            </div>
        </div>
    );
}



export default Profile;