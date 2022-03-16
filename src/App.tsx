import React from 'react';
import './App.css';
import Header from "./components/Header/Header";
import Navigation from "./components/Navigation/Navigation"
import Profile from './components/Profile/Profile'
import Dialog from "./components/Dialogs/Dialog";
import News from "./components/News/News";
import Music from "./components/Music/Music";
import Settings from './components/Settings/Settings';
import Friends from "./components/Friends/Friends";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import {ActionsTypes, DialogsPageType, ProfilePageType, StoreType} from "./Redux/State";
import {RootStateType} from "./Redux/State";
import store from "./Redux/State";
import {SideBar} from "./components/SideBar/SideBar";

type AppProps = {
  store: StoreType
  dispatch: (action: ActionsTypes) => void
}

const App = (props: AppProps) => {
  return (
    <div className='app-wrapper'>
      <Header/>
      <SideBar contactsData={props.store.getState().dialogsPage.dialogsData}/>
      <Navigation/>
      <div className='app-wrapper-content'>
        <Routes>
          <Route path='/*'
                 element={<Profile posts={props.store.getState().profilePage.postsData}
                                             newPostText={props.store.getState().profilePage.newPostText}
                                             dispatch={props.store.dispatch}/>}/>

          <Route path='/profile/*'
                 element={<Profile posts={props.store.getState().profilePage.postsData}
                                                     newPostText={props.store.getState().profilePage.newPostText}
                                                     dispatch={props.store.dispatch}/>}/>

          <Route path='/dialogs/*'
                 element={<Dialog dialogs={props.store.getState().dialogsPage.dialogsData}
                                                    messages={props.store.getState().dialogsPage.messageData}
                                                    newMessage={props.store.getState().dialogsPage.newMessage}
                                                    dispatch={props.store.dispatch}/>}/>
          <Route path='/news/*'
                 element={<News/>}/>
          <Route path='/music/*'
                 element={<Music/>}/>
          <Route path='/settings/*'
                 element={<Settings/>}/>
          <Route path='/friends/*'
                 element={<Friends/>}/>
        </Routes>
      </div>
    </div>
  )
}

export default App;


