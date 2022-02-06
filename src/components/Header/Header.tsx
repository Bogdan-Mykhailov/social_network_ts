import React from "react";
import classes from './Header.module.css'
import logo from './logo.jpg'

const Header = () => {
  return (
    <header className={classes.header}>
      <img src={logo} alt="logo"/>
      <div className={classes.title}>Majestic</div>
    </header>
  )
}
export default Header;