import React from "react";
import styles from './MyPosts.module.css'
import Post from "./Post/Post";


const MyPosts = (props) => {
    return (
        <div className={styles.myPosts}>
        <h2>My posts</h2>
            <textarea name="" id="" cols="20" rows="2"></textarea>
            <div>
                <button>Add post</button>
            </div>
            <Post massage="Hi!" likesCount="10 Likes"/>
            <Post massage="How are you?" likesCount="100 Likes"/>
            <Post massage="I am OK!" likesCount="1000 Likes"/>
        </div>
    )

}

export default MyPosts;