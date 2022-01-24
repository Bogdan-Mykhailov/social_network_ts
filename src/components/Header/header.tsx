import React from "react";
import './header.css'
import bomb from './bomb.png'

const Header = () => {
  return(
      <header className='header'>
        <img src={bomb} alt="bomb"/>
      </header>
  )
}
    export default Header;