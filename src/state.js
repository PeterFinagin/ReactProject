let rerenderEntireTree = () => {
    console.log("State is changed.")
}

let state = {
    profilePage: {
        posts: [
            {id: 1, message: 'Hi, how are you?', likesCount: 12},
            {id: 2, message: 'It\'s my first post', likesCount: 11},
            {id: 3, message: 'Blabla', likesCount: 11},
            {id: 4, message: 'Dada', likesCount: 11}
        ],
        newPostText: "IT-kamasutra.com"
    },
    dialogsPage: {
        dialogs: [
            {id: 1, name: 'Dimych'},
            {id: 2, name: 'Andrew'},
            {id: 3, name: 'Sveta'},
            {id: 4, name: 'Sasha'},
            {id: 5, name: 'Viktor'},
            {id: 6, name: 'Valera'}
        ],
        newParticipant: "Your name",
        messages: [
            {id: 1, message: 'Hi'},
            {id: 2, message: 'How is your it-kamasutra?'},
            {id: 3, message: 'Yo'},
            {id: 4, message: 'Yo'},
            {id: 5, message: 'Yo'},
            {id: 6, message: 'Yo'}
        ],
        newMessageText: 'Your message'
    },
    sidebar: {
        names: [
            {id: 0, name: 'Dymich'},
            {id: 1, name: 'Victor'},
            {id: 2, name: 'Valera'},
            {id: 3, name: 'Sveta'},
            {id: 4, name: 'Sasha'}
        ]
    }
}

window.state = state;

export const addName = () => {
    let newName = {
        id: 10,
        name: state.dialogsPage.newParticipant
    }
    state.dialogsPage.dialogs.push(newName);
    state.dialogsPage.newParticipant = '';
    rerenderEntireTree();
}

export const addMessage = () => {
    let newMessage = {
        id: 10,
        message: state.dialogsPage.newMessageText
    }
    state.dialogsPage.messages.push(newMessage);
    state.dialogsPage.newMessageText = '';
    rerenderEntireTree();
}
export const addPost = () => {
    let newPost = {
        id: 5,
        message: state.profilePage.newPostText,
        likesCount: 0
    }
    state.profilePage.posts.push(newPost);
    state.profilePage.newPostText = '';
    rerenderEntireTree();
}

export const updateNewName = (newName) => {
    state.dialogsPage.newParticipant = newName;
    rerenderEntireTree();
}

export const updateNewMessage = (newName) => {
    state.dialogsPage.newMessageText = newName;
    rerenderEntireTree();
}
export const updateNewPostText = (newText) => {
    state.profilePage.newPostText = newText;
    rerenderEntireTree();
}
export const subscribe = (observer) => {
    rerenderEntireTree = observer
}

export default state;