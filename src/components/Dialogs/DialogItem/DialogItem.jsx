import React from "react";
import styles from './DialogItem.module.css'
import {NavLink} from "react-router-dom";

const DialogItem = (props) => {
    let path = "/dialogs/" + props.id;
    return <div className={styles.messages}>
        <NavLink to={path}>{props.name}</NavLink>
    </div>
}

export default DialogItem;

