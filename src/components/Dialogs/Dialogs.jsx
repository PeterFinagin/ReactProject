import React from "react";
import styles from './Dialogs.module.css'
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Messages/Messages";

const Dialogs = (props) => {

    let dialogsElements = props.dialogsPage.dialogs
        .map(dialogElement => <DialogItem key={dialogElement.id} name={dialogElement.name} id={dialogElement.id}/>)

    let messagesElements = props.dialogsPage.messages
        .map((message, index) => <Message key={index} message={message.message}/>)

    let messagesElement = React.createRef();
    let dialogsElement = React.createRef();

    let addName = () => {
        props.addName();
    }

    let addMessage = () => {
        props.addMessage();
    }
    let onNameChangeName = () => {
        let text = dialogsElement.current.value;
        props.updateNewName(text);
    }
    let onNameChangeMessage = () => {
        let text = messagesElement.current.value;
        props.updateNewMessage(text);
    }

    return (
        <div>
            <div className={styles.addMessage}>
                <textarea cols="20" rows="1" onChange={onNameChangeName}
                          ref={dialogsElement}
                          value={props.dialogsPage.newParticipant}></textarea>
                <div>
                    <button onClick={addName}>Add your name</button>
                </div>
            </div>
            <div className={styles.addMessage}>
                <textarea cols="20" rows="3"
                          onChange={onNameChangeMessage}
                          ref={messagesElement}
                          value={props.dialogsPage.newMessageText}></textarea>
                <div>
                    <button onClick={addMessage}>Add your message</button>
                </div>
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

