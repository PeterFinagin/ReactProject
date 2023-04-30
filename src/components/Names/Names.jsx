import React from "react";
import styles from './Names.module.css'
import NameItem from "./NameItem/NameItem";




const Names = (props) => {
    let namesElement = props.namesPage.names
        .map(nameElement => <NameItem name={nameElement.name} id={nameElement.id}/>)
    return (
        <div>
            {namesElement}
        </div>
    )
}

export default Names;