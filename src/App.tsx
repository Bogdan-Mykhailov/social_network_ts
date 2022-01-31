import React from 'react';
import './App.css';
import Header from "./components/Header/header";
import Navigation from "./components/Navigation/navigation"
import Profile from './components/Profile/profile'
import Dialogs from "./components/Dialogs/dialogs";
import News from "./components/News/news";
import Music from "./components/Music/music";
import Settings from './components/Settings/settings'
import {BrowserRouter, Route, Routes} from "react-router-dom";

const App = () => {
  return (
    <BrowserRouter>
      <div className='app-wrapper'>
        <Header/>
        <Navigation/>
        <div className='app-wrapper-content'>
          <Routes>
            <Route path='/' element={<Profile/>}/>
            <Route path='/profile/*' element={<Profile/>}/>
            <Route path='/dialogs/*' element={<Dialogs/>}/>
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