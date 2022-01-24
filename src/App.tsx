import React from 'react';
import './App.css';
import Header from "./components/Header/header";
import Navigation from "./components/Navigation/navigation";
import Profile from "./components/Profile/profile";

const App = () => {
  return (
    <div className='app-wrapper'>
      <Header/>
      <Navigation/>
      <Profile/>
    </div>
  )
}
export default App;
