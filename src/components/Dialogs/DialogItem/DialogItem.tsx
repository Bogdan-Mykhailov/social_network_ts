import classes from './DialogItem.module.css'
import {NavLink} from "react-router-dom";
import React from "react";
import {DialogsDataType} from "../../../redux/State";

const DialogItem = (props: DialogsDataType) => {
  const path = '/dialogs/' + props.id
  return (
    <div>
      <div className={classes.dialogsBar}>
        <NavLink className={classes.dialogs + ' ' + classes.active} to={path}><img className={classes.avatarImg} src={props.avatar} alt="avatar"/>{props.name}</NavLink>
      </div>
    </div>
  );
};

export default DialogItem;