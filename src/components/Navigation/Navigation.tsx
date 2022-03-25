import React from "react";
import {NavLink} from "react-router-dom";
import classes from './Navigation.module.css'
import NavRow from "./NavRow";
import {
  MessageRounded,
  MusicNoteRounded,
  NewspaperRounded,
  SettingsRounded,
  AccountCircle,
  PeopleAltRounded
} from "@mui/icons-material";
import Friends from "../Friends/Friends";

const Navigation = () => {
  return (
    <nav className={classes.nav}>
        <NavRow icon={<AccountCircle className={classes.icons} sx={{fontSize: 30}}/>} url='/profile' title='Profile'/>
        <NavRow icon={<MessageRounded className={classes.icons} sx={{fontSize: 30}}/>} url='/dialogs' title='Messages'/>
        <NavRow icon={<PeopleAltRounded className={classes.icons} sx={{fontSize: 30}}/>}
                url='/friends'
                title='Friends'/>
        <NavRow icon={<NewspaperRounded className={classes.icons} sx={{fontSize: 30}}/>} url='/news' title='News'/>
        <NavRow icon={<MusicNoteRounded className={classes.icons} sx={{fontSize: 30}}/>} url='/music' title='Music'/>
        <NavRow icon={<SettingsRounded className={classes.icons} sx={{fontSize: 30}}/>}  url='/settings'
                title='Settings'/>
    </nav>
  )
}
export default Navigation;