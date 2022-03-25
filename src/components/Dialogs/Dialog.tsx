import React, {ChangeEvent, KeyboardEvent} from "react";
import {NavLink} from "react-router-dom";
import classes from './Dialogs.module.css'
import DialogItem from "./DialogItem/DialogItem";
import Message from './Message/Message'
import {DialogsDataType, MessagesDataType} from "../../Redux/Store";
import {RerenderEntireTree} from "../../RerenderEntireTree";
import { ActionsTypes } from "../../Redux/profile-reducer";
import { addNewMessageTextAC, updateMessageAC } from "../../Redux/dialogs-reducer";

type DialogsPropsType = {
  dialogs: DialogsDataType[]
  messages: MessagesDataType[]
  newMessageText: string
  dispatch: (action: ActionsTypes) => void
}

const Dialog = (props: DialogsPropsType) => {

  let dialogsDataItem = props.dialogs.map(i =>
    <DialogItem key={i.id} id={i.id} name={i.name} avatar={i.avatar}/>)

  let messageDataItem = props.messages.map(i =>
    <Message key={i.id} id={i.id} message={i.message} name={i.name} avatar={i.avatar} time={i.time}/>)

  const onClickAddMessageButtonHandler = () => {
    props.dispatch(addNewMessageTextAC(props.newMessageText))
    RerenderEntireTree()
  }
  const onKeyPressHandler = (event: KeyboardEvent<HTMLTextAreaElement>) => {
    if (event.key === 'Enter') {
      onClickAddMessageButtonHandler()
    }
  }
  const onChangeMessageHandler = (event: ChangeEvent<HTMLTextAreaElement>) => {
    props.dispatch(updateMessageAC(event.currentTarget.value))
  }

  return (
    <div className={classes.dialogs}>
      <div className={classes.dialogItems}>
        {dialogsDataItem}
      </div>
      <div className={classes.messages}>
        <div className={classes.messageItem}>
          {messageDataItem}
        </div>
        <div>
            <textarea value={props.newMessageText}

                      onChange={onChangeMessageHandler}
                      style={{resize: 'none'}}
                      onKeyPress={onKeyPressHandler}
                      className={classes.textarea + ' ' + classes.active}/>
        </div>
        <div>
          <button onClick={onClickAddMessageButtonHandler} className={classes.add + ' ' + classes.active}>Add message
          </button>
        </div>
      </div>
    </div>
  );
}
export default Dialog;