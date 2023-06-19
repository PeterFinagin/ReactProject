import React, {memo} from "react";
import styles from './MyPosts.module.css'
import {Field, reduxForm} from "redux-form";
import Post from "./Post/Post";
import {maxLengthCreator, required} from "../../../utils/validators/validators";
import {Textarea} from "../../../common/formsControls/FormsControls";

const maxLength10 = maxLengthCreator(10)

const AddNewPostForm = (props) => {
    return (<form onSubmit={props.handleSubmit}>
            <div>
                <Field component={Textarea}
                       name="newPostText"
                       placeholder={"Post message"}
                       validate={[required, maxLength10]}
                />
            </div>
            <div>
                <button>Add post</button>
            </div>
        </form>
    )
}

const AddNewPostFormRedux = reduxForm({form: "ProfileAddNewPostForm"})(AddNewPostForm)


const MyPosts = memo(props => {
        console.log("Yo")
        let postsElement = [...props.posts]
            .reverse().map((post, index) => <Post key={index}
                                        message={post.message}
                                        likesCount={post.likesCount}/>)

        let onAddPost = (values) => {
            props.addPost(values.newPostText)
        }
        return (
            <div className={styles.myPosts}>
                <h2>My posts</h2>
                    <AddNewPostFormRedux onSubmit={onAddPost}
                    />
                <div>
                    {postsElement}
                </div>
            </div>
        )
    }
)


export default MyPosts;