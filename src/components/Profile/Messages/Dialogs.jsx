import React from "react";
import styles from './Dialogs.module.css'
import {NavLink} from "react-router-dom";

const DialogItem = (props) => {
    let path = "/dialogs/" + props.id;

    return <div className={styles.messages}>
            <NavLink to={path}>{props.name}</NavLink>
        </div>
}

const Message = (props) => {
    return <div className={styles.messages}>{props.message}</div>
}

const Dialogs = (props) => {
    let dialogsData = [
        {id: 1, name: "Dymich"},
        {id: 2, name: "Sveta"},
        {id: 3, name: "Victor"}
    ]
    let messagesData = [
        {id: 1, message: "Hi!"},
        {id: 2, message: "How is your IT-kamasutra?"},
        {id: 3, message: "Prosto kabzda!"}
    ]
    return (
        <div className={styles.dialogs}>
            <div className={styles.dialogsItems}>
                <DialogItem name={dialogsData[0].name} id={dialogsData[0].id}/>
                <DialogItem name={dialogsData[1].name} id={dialogsData[1].id}/>
                <DialogItem name={dialogsData[2].name} id={dialogsData[2].id}/>
            </div>
            <div className={styles.messages}>
                <Message message={messagesData[0].message}/>
                <Message message={messagesData[1].message}/>
                <Message message={messagesData[2].message}/>
            </div>
        </div>
    )
}

export default Dialogs;

