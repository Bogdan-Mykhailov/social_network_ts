import React from 'react';
import './App.css';
import Header from "./components/Header/Header";
import Navigation from "./components/Navigation/Navigation"
import Profile from './components/Profile/Profile'
import Dialogs from "./components/Dialogs/Dialogs";
import News from "./components/News/News";
import Music from "./components/Music/Music";
import Settings from './components/Settings/Settings';
import Sidebar from "./components/Sidebar/Sidebar";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import {DialogsPageType, ProfilePageType} from "./redux/State";

type AppProps = {
  profilePage: ProfilePageType
  dialogsPage: DialogsPageType
}

const App = (props: AppProps) => {
  return (
    <BrowserRouter>
      <div className='app-wrapper'>
        <Header/>
        <Navigation/>
        <div className='app-wrapper-content'>
          <Routes>
            <Route path='/' element={<Profile posts={props.profilePage.postsData}/>}/>
            <Route path='/profile/*' element={<Profile posts={props.profilePage.postsData}/>}/>
            <Route path='/dialogs/*' element={<Dialogs dialogs={props.dialogsPage.dialogsData}
                                                       messages={props.dialogsPage.messageData}/>}/>
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