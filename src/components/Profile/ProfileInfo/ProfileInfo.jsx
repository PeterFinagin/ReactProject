import React from "react";
import styles from './ProfileInfo.module.css'
import Preloader from "../../../common/preloader/Preloader";
import ProfileStatus from "./ProfileStatus"
import ProfileStatusWithHooks from "./ProfileStatusWithHooks";


const ProfileInfo = (props) => {
    if (!props.profile) {
        return <Preloader/>
    }
    let getLookingForAJob = () => {
        if (!props.profile.lookingForAJob) {
            return <div>I am not looking for a job.</div>
        } else {
            return <div>I am looking for a job.</div>
        }
    }
    return (
        <div>
            {/*<div className={styles.profile}>*/}
            {/*    <img src="https://cdn.eso.org/images/screen/vlt-mw-potw.jpg" alt="Panorama"/>*/}
            {/*</div>*/}
            <div className={styles.profileInfo}>
                <div className={styles.ava}>
                    <img src={props.profile.photos.large}/>
                    <ProfileStatusWithHooks status={props.status} updateStatus={props.updateStatus}/>
                </div>
                <div className={styles.profileInfo}>
                    <div>Контакты:</div>
                    <div>{props.profile.contacts.facebook}</div>
                    <div>{props.profile.contacts.website}</div>
                    <div>{props.profile.contacts.vk}</div>
                    <div>{props.profile.contacts.instagram}</div>
                    <div>{props.profile.contacts.youtube}</div>
                    <div>{props.profile.contacts.github}</div>
                    <div>Looking for a job:</div>
                    <div>{getLookingForAJob()}</div>
                </div>
                <div className={styles.profileInfo}>
                    <div>Looking for a job:</div>
                    <div>{getLookingForAJob()}</div>
                    <div>Looking for a job description: {props.profile.lookingForAJobDescription}</div>
                </div>
            </div>
        </div>
    )
}

export default ProfileInfo;