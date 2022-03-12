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
import {DialogsPageType, ProfilePageType} from "./Redux/State";
import {RootStateType} from "./Redux/State";
import {addPost} from "./Redux/State";

type AppProps = {
  state: RootStateType
  addPost: (postText: string) => void
  updateNewPostText: (newPostText: string) => void
  newPostText: string
}

const App = (props: AppProps) => {
  return (

      <div className='app-wrapper'>
        <Header/>
        <Navigation/>
        <div className='app-wrapper-content'>
          <Routes>
            <Route path='/' element={<Profile posts={props.state.profilePage.postsData} newPostText={props.state.profilePage.newPostText} addPost={props.addPost} updateNewPostText={props.updateNewPostText}/>}/>
            <Route path='/profile/*' element={<Profile posts={props.state.profilePage.postsData} newPostText={props.state.profilePage.newPostText} addPost={props.addPost}  updateNewPostText={props.updateNewPostText}/>}/>
            <Route path='/dialogs/*' element={<Dialog dialogs={props.state.dialogsPage.dialogsData}
                                                      messages={props.state.dialogsPage.messageData}/>}/>
            <Route path='/news/*' element={<News/>}/>
            <Route path='/music/*' element={<Music/>}/>
            <Route path='/settings/*' element={<Settings/>}/>
            <Route path='/friends/*' element={<Friends/>}/>
          </Routes>
        </div>
      </div>

  )
}

export default App;


