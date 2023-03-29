import React from "react";
import styles from "./Post.module.css"


const Post = (props) => {
    return (
            <div className={styles.posts}>
                <div className={styles.item}>
                    <img src="https://cdn.pixabay.com/photo/2017/08/26/23/37/business-2684758_960_720.png" alt="Ava"/>
                    {props.message}
                </div>
                <div>
                    <span>{props.likeCount}</span>
                </div>
            </div>
    )
}

export default Post;
