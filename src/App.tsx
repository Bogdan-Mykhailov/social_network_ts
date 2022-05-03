import React from 'react';
import './App.css';
import Header from "./components/Header/Header";
import Navigation from "./components/Navigation/Navigation"
import Profile from './components/Profile/Profile'
import Dialogs from "./components/Dialogs/Dialogs";
import News from "./components/News/News";
import Music from "./components/Music/Music";
import Settings from './components/Settings/Settings';
import Friends from "./components/Friends/Friends";
import {BrowserRouter, Redirect, Route} from "react-router-dom";
import {SideBar} from "./components/SideBar/SideBar";
import {ActionsTypes} from './Redux/profile-reducer';
import store, {StoreTypeRedux} from "./Redux/redux-store";
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import UsersContainer from './components/Users/UsersContainer';
import ProfileContainer from "./components/Profile/ProfileContainer";

const App = () => {
  return (
    <div className='app-wrapper'>
      <Header/>
      <SideBar contactsData={store.getState().dialogsPage.dialogsData}/>
      <Navigation/>
      <div className='app-wrapper-content'>
          <Route exact path='/'>
              <Redirect to={'/profile'}/>
          </Route>
          <Route path='/profile/:userId?' render={() => <ProfileContainer/>}/>
          <Route path='/dialogs/' render={() => <DialogsContainer/>}/>
          <Route path='/news/' render={() => <News/>}/>
          <Route path='/music/' render={() => <Music/>}/>
          <Route path='/settings/' render={() => <Settings/>}/>
          <Route path='/friends/' render={() => <Friends/>}/>
          <Route path='/users/' render={() => <UsersContainer/>}/>
      </div>
    </div>
  )
}

export default App;
