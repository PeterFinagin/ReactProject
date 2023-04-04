import React from "react";
import styles from "./Dialogs.module.css"
import {NavLink} from "react-router-dom";


const DialogsItem = (props) => {
    let path = "/dialogs/" + props.id;
    return (
        <div className={styles.dialog}>
            <NavLink to={path}>{props.name}</NavLink>
        </div>
    )
}

const Massage = (props) => {
    return (
        <div className={styles.massage}>{props.massage}</div>
    )
}


const Dialogs = () => {
    let dialogData = [
        {id: 1, name: "Dimych"},
        {id: 2, name: "Andrey"},
        {id: 3, name: "Sveta"},
        {id: 4, name: "Victor"},
        {id: 5, name: "Valera"}
    ];

    let massageData = [
        {id: 1, massage:"Hi!" },
        {id: 2, massage:"How is your IT-kamasutra?"},
        {id: 3, massage:"Ok!"},
        {id: 4, massage:"Is it a react?"},
        {id: 5, massage:"Something kinda."}
    ];
    return (
        <div className={styles.dialogs}>
            <div className={styles.dialogsItem}>
                <DialogsItem name={dialogData[0].name} id={dialogData[0].id}/>
                <DialogsItem name={dialogData[1].name} id={dialogData[1].id}/>
                <DialogsItem name={dialogData[2].name} id={dialogData[2].id}/>
                <DialogsItem name={dialogData[3].name} id={dialogData[3].id}/>
                <DialogsItem name={dialogData[4].name} id={dialogData[4].id}/>
            </div>
            <div className={styles.massages}>
                <Massage massage={massageData[0].massage} id={massageData[0].id}/>
                <Massage massage={massageData[1].massage} id={massageData[1].id}/>
                <Massage massage={massageData[2].massage} id={massageData[2].id}/>
                <Massage massage={massageData[3].massage} id={massageData[3].id}/>
                <Massage massage={massageData[4].massage} id={massageData[4].id}/>
            </div>
        </div>
    )
}

export default Dialogs;
