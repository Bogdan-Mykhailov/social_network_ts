import React, {useEffect} from 'react';
import './App.css';
import Navigation from "./03-COMPONENTS/Navigation/Navigation"
import {SideBar} from "./03-COMPONENTS/SideBar/SideBar";
import store, {useTypedSelector} from "./02-BLL/store";
import HeaderContainer from "./03-COMPONENTS/Header/HeaderContainer";
import {Routs} from './03-COMPONENTS/Routs/Routs';
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
