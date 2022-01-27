import React from 'react';
import './App.css';
import Header from "./components/Header/header";
import Navigation from "./components/Navigation/navigation";
import Profile from "./components/Profile/profile";
import Dialogs from "./components/Dialogs/dialogs";
import classes from "./components/Profile/profile.module.css";

const App = () => {
    return (
        <div className='app-wrapper'>
            <Header/>
            <Navigation/>
            {/*<Profile/>*/}
            <div className='app-wrapper-content'>
                <Dialogs type=''/>
            </div>
        </div>
    )
}
export default App;
