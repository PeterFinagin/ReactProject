import React from "react";
import profileReducer, {addPostActionCreator, deletePost} from "./profile-reducer";

let state = {
    posts: [
        {id: 1, message: 'Hi, how are you?', likesCount: 12},
        {id: 2, message: 'It\'s my first post', likesCount: 11},
        {id: 3, message: 'Blabla', likesCount: 11},
        {id: 4, message: 'Dada', likesCount: 11}
    ]
}

it('length of posts should be incremented', () => {
    let action = addPostActionCreator("IT-kamasutra.com")

    let newState = profileReducer(state , action)
    expect(newState.posts.length).toBe(5)
});

it('message of posts should be correct', () => {
    let action = addPostActionCreator("IT-kamasutra.com")

    let newState = profileReducer(state , action)
    expect(newState.posts[4].message).toBe("IT-kamasutra.com")
});

it('after deleting post length of messages should be decremented', () => {
    let action = deletePost([1])

    let newState = profileReducer(state , action)
    expect(newState.posts.length).toBe(3)
});

it(`after deleting post length of messages shouldn't be decremented if post id incorrect`, () => {
    let action = deletePost(1000)

    let newState = profileReducer(state , action)
    expect(newState.posts.length).toBe(4)
});