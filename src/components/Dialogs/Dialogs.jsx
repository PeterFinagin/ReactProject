import React from "react";
import styles from './Dialogs.module.css'
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Messages/Messages";
import {Field, reduxForm} from "redux-form";
import {Textarea} from "../../common/formsControls/FormsControls";
import {maxLengthCreator, required} from "../../utils/validators/validators";

const Dialogs = (props) => {

    let state = props.dialogsPage

    let dialogsElements = state.dialogs
        .map(dialogElement => <DialogItem key={dialogElement.id}
                                          name={dialogElement.name}
                                          id={dialogElement.id}/>)
    let messagesElements = state.messages
        .map((message, index) => <Message
            key={index} message={message.message}/>)
    let newMessageBody = state.newMessageBody;

    let addNewMessage = (values) => {
        props.sendMessage(values.newMessageBody)
    }

    // if (props.isAuth) return <redirect to={"/login"}/>

    return (
        <div className={styles.dialogs}>
            <div className={styles.dialogsItems}>
                {dialogsElements}
            </div>
            <div className={styles.messages}>
                <div>{messagesElements}</div>
                <AddMessageFormRedux onSubmit={addNewMessage}/>
            </div>
        </div>
    )
}
const maxLength100 = maxLengthCreator(100)
const AddMessageForm = (props) => {
    return (<form onSubmit={props.handleSubmit}>
        <div>
            <Field component={Textarea}
                   name={'newMessageBody'}
                   placeholder={'Enter your message'}
            validate={[required, maxLength100]}
            />
        </div>
        <div>
            <button>Send</button>
        </div>
    </form>
    )
}

const AddMessageFormRedux = reduxForm({form: 'dialogAddMessageForm'})(AddMessageForm)

export default Dialogs;

