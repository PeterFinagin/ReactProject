import React from "react";
import Header from './components/Header/Header.jsx';
import Navbar from "./components/Navbar/Navbar";
import Profile from "./components/Profile/Profile";
import styles from "./App.module.css"
import Names from "./components/Names/Names";
import Settings from "./components/Profile/Settings/Settings";
import Dialogs from "./components/Dialogs/Dialogs";
import {Route, Routes} from "react-router-dom";


const App = (props) => {
    return (
        <div className={styles.appWrapper}>
            <Header/>
            <Navbar/>
            <div className="appWrapperContent">
                <Routes>
                    <Route path="/profile" element={<Profile
                        profilePage={props.state.profilePage}
                        addPost={props.addPost}
                        updateNewPostText={props.updateNewPostText}
                    />}/>
                    <Route path="/names" element={<Names namesPage={props.state.sidebar}/>}/>
                    <Route path="/settings" element={<Settings/>}/>
                    <Route path="/massages" element={<Dialogs
                        updateNewName={props.updateNewName}
                        updateNewMessage={props.updateNewMessage}
                        addMessage={props.addMessage}
                        addName={props.addName}
                        dialogsPage={props.state.dialogsPage}/>}/>
                </Routes>
            </div>
        </div>
    )
}

export default App;

