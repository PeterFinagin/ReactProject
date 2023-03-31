import React from "react";
import styles from "./Dialogs.module.css"


const Dialogs = () => {
    return (
    <div className={styles.dialogs}>
        <div className={styles.dialogsItem}>
            <div className={styles.dialog}>
                Dima
            </div>
            <div className={styles.dialog}>
                Andrey
            </div>
            <div className={styles.dialog}>
                Sveta
            </div>
            <div className={styles.dialog}>
                Victor
            </div>
            <div className={styles.dialog}>
                Valera
            </div>
        </div>
        <div className={styles.massages}>
            <div className={styles.massage}>Hi!</div>
            <div className={styles.massage}>How is your IT-kamasutra?</div>
            <div className={styles.massage}>Yo!</div>
        </div>
    </div>
)
}

export default Dialogs;
