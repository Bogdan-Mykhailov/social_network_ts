import React from "react";
import { NavLink } from "react-router-dom";
import classes from './Header.module.css'
import logo from './logo.jpg'

type HeaderType = {
  isAuth: boolean
  login: null | string
}

const Header = (props: HeaderType) => {
  return (
    <header className={classes.header}>
      <img src={logo} alt="logo"/>
      <div className={classes.title}>Majestic</div>

      <div className={classes.loginBlock}>
        {props.isAuth ? props.login : <NavLink to={'/login'} >Login</NavLink>}
      </div>
    </header>
  )
}
export default Header;