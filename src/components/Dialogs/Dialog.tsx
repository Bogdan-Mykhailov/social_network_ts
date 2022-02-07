import React from "react";
import {NavLink} from "react-router-dom";
import classes from './Dialogs.module.css'
import DialogItem from "./DialogItem/DialogItem";
import Message from './Message/Message'
import { DialogsDataType, MessagesDataType } from "../../redux/State";

type DialogsPropsType = {
  dialogs: DialogsDataType[]
  messages: MessagesDataType[]
}

const Dialog = (props: DialogsPropsType) => {

  let dialogsDataItem = props.dialogs.map(i =>
    <DialogItem id={i.id} name={i.name} avatar={i.avatar}/>)

  let messageDataItem = props.messages.map(i =>
    <Message id={i.id} message={i.message} name={i.name} avatar={i.avatar} time={i.time}/>)

  return (
    <div className={classes.dialogs}>
      <div className={classes.dialogItems}>
        {dialogsDataItem}
      </div>
      <div className={classes.messages}>
        <div className={classes.messageItem}>
          {messageDataItem}
        </div>
      </div>
    </div>
  );
}
export default Dialog;