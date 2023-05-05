

let store = {
    _state: {
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
    },

    _callSubscriber() {
        console.log("State is changed.")
    },


    getState() {
        return this._state
    },

    subscribe(observer) {
        this._callSubscriber = observer
    },

    dispatch(action) {
        if (action.type === "ADD-POST") {
            let newPost = {
                id: 5,
                message: this._state.profilePage.newPostText,
                likesCount: 0
            }
            this._state.profilePage.posts.push(newPost);
            this._state.profilePage.newPostText = '';
            this._callSubscriber();
        } else if (action.type === "UPDATE-NEW-POST-TEXT") {
            this._state.profilePage.newPostText = action.newText;
            this._callSubscriber();
        }
        },

    addPost() {
        let newPost = {
            id: 5,
            message: this._state.profilePage.newPostText,
            likesCount: 0
        }
        this._state.profilePage.posts.push(newPost);
        this._state.profilePage.newPostText = '';
        this._callSubscriber();
    },

    updateNewPostText(newText) {
        this._state.profilePage.newPostText = newText;
        this._callSubscriber();
    },

    addName()  {
        let newName = {
            id: 10,
            name: this._state.dialogsPage.newParticipant
        }
        this._state.dialogsPage.dialogs.push(newName);
        this._state.dialogsPage.newParticipant = '';
        this._callSubscriber();
    },

    addMessage() {
        let newMessage = {
            id: 10,
            message: this._state.dialogsPage.newMessageText
        }
        this._state.dialogsPage.messages.push(newMessage);
        this._state.dialogsPage.newMessageText = '';
        this._callSubscriber();
    },

    updateNewName(newName) {
        this._state.dialogsPage.newParticipant = newName;
        this._callSubscriber();
    },

    updateNewMessage(newName) {
        this._state.dialogsPage.newMessageText = newName;
        this._callSubscriber();
    }
}

export default store;
window.store = store;