import React from "react";
import styles from './MyPosts.module.css'
import Post from "./Post/Post";


const MyPosts = (props) => {
    let postsElement = props.posts
        .map((post, index) => <Post key={index} message={post.message} likesCount={post.likesCount}/>)

    let newPostElement = React.createRef();

    let addPost = () => {
        props.addPost();
    }
    let onPostChange = () => {
        let text = newPostElement.current.value;
        props.updateNewPostText(text);
    }
    return (
        <div className={styles.myPosts}>
            <h2>My posts</h2>
            <textarea onChange={onPostChange}
                      value={props.newPostText}
                      ref={newPostElement}
                      cols="20" rows="2"></textarea>
            <div>
                <button onClick={addPost}>Add post</button>
            </div>
            {postsElement}
        </div>
    )

}

export default MyPosts;