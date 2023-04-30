import React from 'react';
import './index.css';
import reportWebVitals from './reportWebVitals';
import state, {addMessage, addName, subscribe, updateNewMessage, updateNewName} from "./state";
import App from './App';
import ReactDOM from "react-dom/client";
import {BrowserRouter} from "react-router-dom";
import {addPost, updateNewPostText} from "./state";
const root = ReactDOM.createRoot(document.getElementById('root'));


export let rerenderEntireTree = () => {
    root.render(
        <React.StrictMode>
            <BrowserRouter>
                <App state={state}
                     addPost={addPost}
                     addName={addName}
                     addMessage={addMessage}
                     updateNewPostText={updateNewPostText}
                     updateNewName={updateNewName}
                     updateNewMessage={updateNewMessage}/>
            </BrowserRouter>
        </React.StrictMode>
    );
}
rerenderEntireTree();

subscribe(rerenderEntireTree);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
