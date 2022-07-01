import React, {useEffect} from "react";
import {NavLink, Redirect} from "react-router-dom";
import classes from './Header.module.css'
import logo from './logo.jpg'
import {useTypedDispatch, useTypedSelector} from "../../Redux/redux-store";
import {loginAC, setLoggedOutTC} from "../../Redux/auth-reducer";

type HeaderType = {
  isAuth: boolean
  login: null | string
}

const Header = (props: HeaderType) => {

  const isAuth = useTypedSelector(state => state.auth.isAuth)
  const dispatch = useTypedDispatch()

  useEffect( () => {

  }, [])

  if (!isAuth) {
    return <Redirect to={'/login'}/>
  }

  const logOutHandler = () => {
    dispatch(setLoggedOutTC())
  }

  return (
    <header className={classes.header}>
      <img src={logo} alt="logo"/>
      <div className={classes.title}>Majestic</div>

      <div className={classes.loginBlock}>
        {props.isAuth ? props.login : <NavLink to={'/login'}>Login</NavLink>}
        <button onClick={logOutHandler}>Logout</button>
      </div>
    </header>
  )
}
export default Header;