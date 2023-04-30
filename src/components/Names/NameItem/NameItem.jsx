import React from "react";
import styles from './NameItem.module.css'
import {NavLink} from "react-router-dom";


const NameItem = (props) => {
    let path = "/names/" + props.id;
    return <div className={styles.nameItem}>
            {props.name}
    </div>
}
export default NameItem;