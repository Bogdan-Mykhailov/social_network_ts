import React from "react";
import classes from './Dialogs.module.css'
import DialogItem from "./DialogItem/DialogItem";
import Message from './Message/Message'
import {DialogsPropsType} from "./DialogsContainer";
import {DialogsForm} from "./DialogsForm";

const Dialogs = (props: DialogsPropsType) => {

  const state = props.dialogsPage

  let dialogsDataItem = state.dialogsData.map(i => <DialogItem
    key={i.id}
    id={i.id}
    name={i.name}
    avatar={i.avatar}
  />)
  let messageDataItem = state.messageData.map(i => <Message
    key={i.id}
    id={i.id}
    message={i.message}
    name={i.name}
    avatar={i.avatar}
    time={i.time}
  />)

  return (
    <div className={classes.dialogs}>
      <div className={classes.dialogItems}>
        {dialogsDataItem}
      </div>
      <div className={classes.messages}>
        <div className={classes.messageItem}>
          {messageDataItem}
        </div>
        <DialogsForm addMessageHandler={props.addMessageHandler}/>
      </div>
    </div>
  );
}
export default Dialogs;




