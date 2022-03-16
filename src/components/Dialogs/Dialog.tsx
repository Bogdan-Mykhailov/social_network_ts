import React, {ChangeEvent, KeyboardEvent, useState} from "react";
import {NavLink} from "react-router-dom";
import classes from './Dialogs.module.css'
import DialogItem from "./DialogItem/DialogItem";
import Message from './Message/Message'
import {
  ActionsTypes,
  addMessageAC,
  addPostAC,
  DialogsDataType,
  MessagesDataType,
  updateNewMessageTextAC,
  updateNewPostTextAC
} from "../../Redux/State";

type DialogsPropsType = {
  dialogs: DialogsDataType[]
  messages: MessagesDataType[]
  dispatch: (action: ActionsTypes) => void
  newMessage: string
}

const Dialog = (props: DialogsPropsType) => {

  let dialogsDataItem = props.dialogs.map(i =>
    <DialogItem id={i.id} name={i.name} avatar={i.avatar}/>)

  let messageDataItem = props.messages.map(i =>
    <Message id={i.id} message={i.message} name={i.name} avatar={i.avatar} time={i.time}/>)


  const onClickAddPostButtonHandler = () => {
    return props.dispatch(addMessageAC())
  }
  const onKeyPressHandler = (event: KeyboardEvent<HTMLTextAreaElement>) => {
    if (event.key === 'Enter') {
      onClickAddPostButtonHandler()
    }
  }
  const onChangePostHandler = (event: ChangeEvent<HTMLTextAreaElement>) => {
    return  props.dispatch(updateNewMessageTextAC(event.currentTarget.value))
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
      </div>

      <div>
            <textarea value={props.newMessage}
                      onChange={onChangePostHandler}
                      style={{resize: 'none'}}
                      onKeyPress={onKeyPressHandler}
                      className={classes.textarea + ' ' + classes.active}/>
      </div>
      <div>
        <button onClick={onClickAddPostButtonHandler} className={classes.add + ' ' + classes.active}>Add post
        </button>
      </div>


    </div>
  );
}
export default Dialog;