import React from "react";
import styles from "./FormsControls.module.css"

export const FormControl = ({input, meta, child, ...props}) => {
    const hasError = meta.touched && meta.error
    return (
        <div className={hasError? styles.formControl + " " + styles.error : undefined}>
        <div>
            {props.children}
        </div>
            <div className={styles.errorSpan}>
        {hasError ? <span>{meta.error}</span> : undefined}
            </div>
    </div>
    )
}

export const Input = (props) => {
    const {input, meta, child, ...restProps} = props
    return (
        <FormControl {...props}><input {...input} {...restProps}/></FormControl>
    )
}

export const Textarea = (props) => {
    const {input, meta, child, ...restProps} = props
    return (
        <FormControl {...props}><textarea {...input} {...restProps}/></FormControl>
    )
}