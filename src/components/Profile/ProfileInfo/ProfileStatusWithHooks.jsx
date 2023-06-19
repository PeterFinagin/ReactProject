import React, {useEffect, useState} from "react";

const ProfileStatusWithHooks = (props) => {

    let [editMode, setEditMode] = useState(false)
    let [status, setStatus] = useState(props.status)

    useEffect(() => {
        setStatus(props.status)
    }, [props.status])

    const activateEditMode = () => {
        setEditMode(true)
    }
    const deActivateEditMode = () => {
        setEditMode(false)
        props.updateStatus(status)
    }
    const onStatusChange = (e) => {
        setStatus(e.currentTarget.value
        )
    }
    return (
        <div>
            {!editMode ?
                <div>
                        <span onClick={activateEditMode}>
                            {props.status}
                        </span>
                </div> : undefined
            }
            {editMode ?
                <div>
                    <input onChange={onStatusChange}
                           autoFocus={true}
                           onBlur={deActivateEditMode}
                           value={status}
                    />
                </div> : undefined
            }
        </div>
    )
}

export default ProfileStatusWithHooks;