import React from "react";
import classes from './Header.module.css'
import bomb from './bomb.png'

const Header = () => {
  return (
    <header className={classes.header}>
      <img src={bomb} alt="bomb"/>
    </header>
  )
}
export default Header;