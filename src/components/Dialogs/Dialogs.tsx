import React, {ChangeEvent, KeyboardEvent} from "react";
import {NavLink} from "react-router-dom";
import classes from './Dialogs.module.css'
import DialogItem from "./DialogItem/DialogItem";
import Message from './Message/Message'
import {DialogsDataType, MessagesDataType} from "../../Redux/Store";
import {ActionsTypes} from "../../Redux/profile-reducer";
import {addNewMessageTextAC, updateMessageAC} from "../../Redux/dialogs-reducer";
import {StoreTypeRedux} from "../../Redux/redux-store";

type DialogsProps = {
  dialogs: DialogsDataType[]
  messages: MessagesDataType[]
  newMessageText: string
  onClickAddMessageButtonHandler: () => void
  onKeyPressHandler: (event: KeyboardEvent<HTMLTextAreaElement>) => void
  onChangeMessageHandler: (event: ChangeEvent<HTMLTextAreaElement>) => void
}

const Dialogs = (props: DialogsProps) => {

  let dialogsDataItem = props.dialogs.map(i => <DialogItem key={i.id} id={i.id} name={i.name} avatar={i.avatar}/>)

  let messageDataItem = props.messages.map(i => <Message key={i.id} id={i.id} message={i.message} name={i.name}
                                                         avatar={i.avatar} time={i.time}/>)

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
                      onChange={props.onChangeMessageHandler}
                      style={{resize: 'none'}}
                      onKeyPress={props.onKeyPressHandler}
                      className={classes.textarea + ' ' + classes.active}
            />
        </div>
        <div>
          <button
            onClick={props.onClickAddMessageButtonHandler}
            className={classes.add + ' ' + classes.active}>Add message
          </button>
        </div>
      </div>
    </div>
  );
}
export default Dialogs;