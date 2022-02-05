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

const Dialogs = (props: DialogsPropsType) => {

  let dialogsDataItem = props.dialogs.map(i =>
    <DialogItem id={i.id} name={i.name}/>)

  let messageDataItem = props.messages.map(i =>
    <Message id={i.id} message={i.message}/>)

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
export default Dialogs;