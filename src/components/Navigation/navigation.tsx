import React from "react";
import {NavLink} from "react-router-dom";
import classes from './navigation.module.css'
import NawRow from "./NavRow/NawRow";
import HomeRoundedIcon from '@mui/icons-material/HomeRounded';


const Navigation = () => {
  return (
    <nav className={classes.nav}>
      <div >
        <NawRow icon={<HomeRoundedIcon />} url='/profile' title='Profile'/>
        <NawRow url='/dialogs' title='Messages'/>
        <NawRow url='/news' title='News'/>
        <NawRow url='/music' title='Music'/>
        <NawRow url='/settings' title='Settings'/>
      </div>
    </nav>
  )
}
export default Navigation;