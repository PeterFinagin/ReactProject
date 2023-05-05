import React from 'react';
import './index.css';
import reportWebVitals from './reportWebVitals';
import store from "./state";
import App from './App';
import ReactDOM from "react-dom/client";
import {BrowserRouter} from "react-router-dom";
const root = ReactDOM.createRoot(document.getElementById('root'));


export let rerenderEntireTree = (state) => {
    root.render(
        <React.StrictMode>
            <BrowserRouter>
                <App state={store.getState()}
                     addPost={store.addPost.bind(store)}
                     addName={store.addName.bind(store)}
                     addMessage={store.addMessage.bind(store)}
                     updateNewPostText={store.updateNewPostText.bind(store)}
                     updateNewName={store.updateNewName.bind(store)}
                     updateNewMessage={store.updateNewMessage.bind(store)}/>
            </BrowserRouter>
        </React.StrictMode>
    );
}
rerenderEntireTree(store.getState());

store.subscribe(rerenderEntireTree);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
