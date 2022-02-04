import React from 'react';
import './App.css';
import Header from "./components/Header/header";
import Navigation from "./components/Navigation/navigation"
import Profile from './components/Profile/profile'
import Dialogs from "./components/Dialogs/Dialogs";
import News from "./components/News/news";
import Music from "./components/Music/music";
import Settings from './components/Settings/settings'
import {BrowserRouter, Route, Routes} from "react-router-dom";
import state, {DialogsDataType, MessagesDataType, PostDataType} from "./redux/state";


type AppProps = {
  dialogs: Array<DialogsDataType>,
  messages: Array<MessagesDataType>,
  posts: Array<PostDataType>
}

const App = (props: AppProps) => {
  return (
    <BrowserRouter>
      <div className='app-wrapper'>
        <Header/>
        <Navigation/>
        <div className='app-wrapper-content'>
          <Routes>
            <Route path='/' element={<Profile posts={state.profilePage.postsData}/>}/>
            <Route path='/profile/*' element={<Profile posts={state.profilePage.postsData}/>}/>
            <Route path='/dialogs/*' element={<Dialogs  dialogs={state.dialogsPage.dialogsData} messages={state.dialogsPage.messageData}/>}/>
            <Route path='/news/*' element={<News/>}/>
            <Route path='/music/*' element={<Music/>}/>
            <Route path='/settings/*' element={<Settings/>}/>
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  )
}
export default App;