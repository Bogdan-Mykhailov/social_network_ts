import React, {ChangeEvent, KeyboardEvent} from "react";
import {NavLink, Redirect} from "react-router-dom";
import classes from './Dialogs.module.css'
import DialogItem from "./DialogItem/DialogItem";
import Message from './Message/Message'
import {addNewMessageTextAC, updateMessageAC} from "../../02-BLL/dialogs-reducer";
import {StoreTypeRedux} from "../../02-BLL/store";
import {DialogsPropsType} from "./DialogsContainer";

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

  if (!props.isAuth) return <Redirect to={'/login'}/>


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
            <textarea
              onChange={props.onChangeMessageHandler}
              style={{resize: 'none'}}
              className={classes.textarea + ' ' + classes.active}
              value={props.newMessageText}
              onKeyPress={props.onKeyPressHandler}
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