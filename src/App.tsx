import React from 'react';
import './App.css';
import Header from "./components/Header/header";
import Navigation from "./components/Navigation/navigation";
import Profile from "./components/Profile/profile";
import Dialogs from "./components/Dialogs/dialogs";
import classes from "./components/Profile/profile.module.css";
import {BrowserRouter, Route} from "react-router-dom";
// import {RouteComponentProps} from "react-router-dom";

const App = () => {

  return (
      <BrowserRouter>
        <div className='app-wrapper'>
            <Header/>
            <Navigation/>
            <div className='app-wrapper-content'>
              <Dialogs type=''/>
              {/*<Profile/>*/}
              {/*<Route component={Dialogs}/>*/}
              {/*<Route component={Profile}/>*/}
            </div>
        </div>
      </BrowserRouter>
    )
}
export default App;
