import React from "react";
import {NavLink} from "react-router-dom";
import classes from './dialogs.module.css'
import DialogItem from "./DialogItem/DialogItem";
import Message from './Message/Message'
import state, { DialogsDataType, MessagesDataType } from "../../redux/state";

type DialogsPropsType = {
  dialogs: Array<DialogsDataType>
  messages: Array<MessagesDataType>
}

const Dialogs = (props: DialogsPropsType) => {

  let dialogsDataItem = state.dialogsPage.dialogsData.map(i =>
    <DialogItem id={i.id} name={i.name}/>)

  let messageDataItem = state.dialogsPage.messageData.map(i =>
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