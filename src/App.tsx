import React, {useEffect} from 'react';
import './App.css';
import Navigation from "./components/Navigation/Navigation"
import {Login} from "./components/Login/Login";
import {SideBar} from "./components/SideBar/SideBar";
import store, {useTypedSelector} from "./Redux/redux-store";
import HeaderContainer from "./components/Header/HeaderContainer";
import {Routs} from './components/Routs/Routs';
import {Redirect} from 'react-router-dom';

const App = () => {
  const isAuth = useTypedSelector(state => state.auth.isAuth)

  return (
    <div className='app-wrapper'>
      <HeaderContainer/>
      {
        isAuth && <>
              <SideBar contactsData={store.getState().dialogsPage.dialogsData}/>
              <Navigation/>
          </>
      }
      <Routs/>
    </div>
  )
}

export default App;
