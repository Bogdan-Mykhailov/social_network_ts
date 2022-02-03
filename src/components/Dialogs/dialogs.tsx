import React from "react";
import {NavLink} from "react-router-dom";
import classes from './dialogs.module.css'
import DialogItem from "./DialogItem/DialogItem";
import Message from './Message/Message'

let dialogsData = [
  {id: 1, name: 'Liam'},
  {id: 2, name: 'Oliver'},
  {id: 3, name: 'Emma'},
  {id: 4, name: 'Benjamin'},
  {id: 5, name: 'Harper'},
]

let messageData = [
  {id: 1, message: 'Dinner tonight?'},
  {id: 2, message: 'How\'s the new coffe shop by you guys?'},
  {id: 3, message: 'Call me back! 😘'},
  {id: 4, message: 'Party tonnight??? 🍸'},
  {id: 5, message: 'Thats sounds good. How is your Wednesday?'},
]

const Dialogs = () => {

  let dialogsDataItem = dialogsData.map(i =>
    <DialogItem id={i.id} name={i.name}/>)

  let messageDataItem = messageData.map(i =>
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