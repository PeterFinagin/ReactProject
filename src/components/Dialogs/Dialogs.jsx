import React from "react";
import styles from './Dialogs.module.css'
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Messages/Messages";

const Dialogs = (props) => {

    let dialogsElements = props.dialogsPage.dialogs
        .map(dialogElement => <DialogItem key={dialogElement.id} name={dialogElement.name} id={dialogElement.id}/>)

    let messagesElements = props.dialogsPage.messages
        .map((message, index) => <Message key={index} message={message.message}/>)



    return (
        <div>
            <div className={styles.addMessage}>

            </div>
            <div className={styles.addMessage}>

            </div>
            <div className={styles.dialogs}>
                <div className={styles.dialogsItems}>
                    {dialogsElements}
                </div>
                <div className={styles.messages}>
                    {messagesElements}
                </div>
            </div>
        </div>
    )
}

export default Dialogs;

