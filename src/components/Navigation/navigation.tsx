import React from "react";
import {NavLink} from "react-router-dom";
import classes from './navigation.module.css'
import NawRow from "./NawRow";
// import HomeRounded from '@mui/icons-material/HomeRounded';
import {
  MessageRounded,
  MusicNoteRounded,
  NewspaperRounded,
  SettingsRounded,
  SupervisedUserCircleSharp
} from "@mui/icons-material";


const Navigation = () => {
  return (
    <nav className={classes.nav}>
      <div >
        <NawRow icon={<SupervisedUserCircleSharp className={classes.icons} sx={{ fontSize: 30 }}/>} url='/profile' title='Profile'/>
        <NawRow icon={<MessageRounded className={classes.icons} sx={{ fontSize: 30 }}/>} url='/dialogs' title='Messages'/>
        <NawRow icon={<NewspaperRounded className={classes.icons} sx={{ fontSize: 30 }}/>} url='/news' title='News'/>
        <NawRow icon={<MusicNoteRounded className={classes.icons} sx={{ fontSize: 30 }}/>} url='/music' title='Music'/>
        <NawRow icon={<SettingsRounded className={classes.icons} sx={{ fontSize: 30 }}/>} url='/settings' title='Settings'/>
      </div>
    </nav>
  )
}
export default Navigation;