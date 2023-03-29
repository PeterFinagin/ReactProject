import React from "react";
import Header from "./components/Header/Header";
import Navbar from "./components/NavBar/Navbar";
// import Profile from "./components/Profile/Profile";
import Dialogs from "./components/Dialogs/Dialogs";
import "./App.css";


const App = () => {
    return (
        <div className="appWrapper">
            <Header/>
            <Navbar/>
            <div className="appWrapperContent">
                <Dialogs/>
                {/*<Profile/>*/}
            </div>
        </div>
    )
}

export default App;


