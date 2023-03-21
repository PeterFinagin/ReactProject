import React from "react";

const Profile = () => {
    return (
        <div className="profile">
            <div className="top_imag">
                <img className="img_main" src="https://www.shutterstock.com/image-illustration/panorama-distant-planet-system-space-600w-1030734604.jpg" alt=""/>
            </div>
            <div className="ava_description">
                <img className="img_earth" src="https://images.all-free-download.com/images/graphicwebp/earth_blue_planet_globe_215578.webp" alt=""/>
            </div>
            <div className="posts">
                <div className="new_post"></div>
                <div className="post_1"></div>
                <div className="post_2"></div>
            </div>
        </div>
    );
}

export default Profile;