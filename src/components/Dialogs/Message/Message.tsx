import classes from './Message.module.css'
import React from "react";
import {NavLink} from "react-router-dom";
import { MessagesDataType } from '../../../Redux/dialogs-reducer';

const Message = (props: MessagesDataType) => {
  return (
    <div className={classes.messagesWrapper}>
      <div className={classes.avatar}><img src={props.avatar} alt="avatar"/></div>
      <div className={classes.dialogWindow}>
        <p className={classes.name}>{props.name}</p>
        <p className={classes.message}>{props.message}</p>
        <p className={classes.time}>{props.time}</p>
      </div>
    </div>
  );
};

export default Message;