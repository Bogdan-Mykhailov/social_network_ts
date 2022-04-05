import React, {ChangeEvent, KeyboardEvent} from "react";
import {NavLink} from "react-router-dom";
import classes from './Dialogs.module.css'
import DialogItem from "./DialogItem/DialogItem";
import Message from './Message/Message'
import {ActionsTypes} from "../../Redux/profile-reducer";
import {addNewMessageTextAC, updateMessageAC} from "../../Redux/dialogs-reducer";
import {StoreTypeRedux} from "../../Redux/redux-store";
import { DialogsPropsType } from "./DialogsContainer";

const Dialogs = (props: DialogsPropsType) => {

  let dialogsDataItem = props.dialogsPage.dialogsData.map(i => <DialogItem key={i.id} id={i.id} name={i.name} avatar={i.avatar}/>)

  let messageDataItem = props.dialogsPage.messageData.map(i => <Message key={i.id} id={i.id} message={i.message} name={i.name}
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
                      // onKeyPress={props.onKeyPressHandler}
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