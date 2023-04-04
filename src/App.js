import React from "react";
import "./App.css";
import Header from "./components/Header/Header";
import Navbar from "./components/NavBar/Navbar";
import {Route, BrowserRouter, Routes} from "react-router-dom";
import Dialogs from "./components/Dialogs/Dialogs";
import Profile from "./components/Profile/Profile";
import News from "./components/News/News";
import Settings from "./components/Settings/Settings";


const App = (props) => {
    return (
        <BrowserRouter>
            <div className="appWrapper">
                <Header/>
                <Navbar/>
                <div className="appWrapperContent">
                    <Routes>
                        <Route  path="/dialogs" element={<Dialogs/>}/>
                        <Route path="/profile" element={<Profile/>}/>
                        <Route path="/news" element={<News/>}/>
                        <Route path="/settings" element={<Settings/>}/>
                    </Routes>
                </div>
            </div>
        </BrowserRouter>
    )
}

export default App;


