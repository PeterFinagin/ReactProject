import React, {Component} from "react";
import {Route, Routes} from "react-router-dom";
import styles from "./App.module.css"
import Navbar from "./components/Navbar/Navbar";
import Login from "./components/Login/Login";
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import UsersContainer from "./components/Users/UsersContainer";
import ProfileContainer from "./components/Profile/ProfileContainer";
import HeaderContainer from "./components/Header/HeaderContainer";
import {compose} from "redux"
import {connect} from "react-redux";
import {initializeApp} from "./redux/app-reducer"
import Preloader from "./common/preloader/Preloader";
import Settings from "./components/Settings/Settings";
import SettingsB from "./components/Settings/SettingsB";
import SettingsY from "./components/Settings/SettingsY";

class App extends Component {
    componentDidMount() {
        this.props.initializeApp()
    }
    render() {
        if (!this.props.initialized) {
            return <Preloader/>
        }
        return (
            <div className={styles.appWrapper}>
                <HeaderContainer/>
                <Navbar/>
                <div className="appWrapperContent">
                    <Routes>
                        <Route path="/profile/:userId?" element={<ProfileContainer/>}/>
                        <Route path="/massages" element={<DialogsContainer/>}/>
                        <Route path="/settings_y" element={<SettingsY/>}/>
                        <Route path="/settings_b" element={<SettingsB/>}/>
                        <Route path="/settings" element={<Settings/>}/>
                        <Route path="/users" element={<UsersContainer/>}/>/>
                        <Route path="/login" element={<Login/>}/>/>
                    </Routes>
                </div>
            </div>
        )
    }
}
const mapStateToProps = (state) => ({
    initialized: state.app.initialized
})

export default compose(
connect (mapStateToProps, {initializeApp}))(App);

