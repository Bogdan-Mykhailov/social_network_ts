import React, {useEffect} from "react";
import {NavLink, Redirect} from "react-router-dom";
import classes from './Header.module.css'
import logo from './logo.jpg'
import {useTypedDispatch, useTypedSelector} from "../../02-BLL/store";

type HeaderType = {
  isAuth: boolean
  login: null | string
  logOutTC: () => void
}

const Header = (props: HeaderType) => {

  return (
    <header className={classes.header}>
      <img src={logo} alt="logo"/>
      <div className={classes.title}>Majestic</div>

      <div className={classes.loginBlock}>
        {
          props.isAuth
            ? <>{props.login}
              <button onClick={props.logOutTC}>Logout</button>
            </>
            : null
            // <NavLink to={'/login'}>Login</NavLink>
        }
        {!props.isAuth &&  <Redirect to={'/login'}/>}
      </div>
    </header>
  )
}
export default Header;
