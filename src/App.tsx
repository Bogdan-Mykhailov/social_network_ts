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
import {BrowserRouter, Route, Routes} from "react-router-dom";
import {SideBar} from "./components/SideBar/SideBar";
import {ActionsTypes} from './Redux/profile-reducer';
import store, {StoreTypeRedux} from "./Redux/redux-store";
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import UsersContainer from './components/Users/UsersContainer';

const App = () => {
  return (
    <div className='app-wrapper'>
      <Header/>
      <SideBar contactsData={store.getState().dialogsPage.dialogsData}/>
      <Navigation/>
      <div className='app-wrapper-content'>
        <Routes>
          <Route path='*' element={<Profile/>}/>
          <Route path='/profile/*' element={<Profile/>}/>
          <Route path='/dialogs/*' element={<DialogsContainer/>}/>
          <Route path='/news/*' element={<News/>}/>
          <Route path='/music/*' element={<Music/>}/>
          <Route path='/settings/*' element={<Settings/>}/>
          <Route path='/friends/*' element={<Friends/>}/>
          <Route path='/users/*' element={<UsersContainer />}/>
        </Routes>
      </div>
    </div>
  )
}

export default App;
