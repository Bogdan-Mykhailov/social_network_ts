import React from "react";
import {NavLink} from "react-router-dom";
import classes from './dialogs.module.css'
import DialogItem from "./DialogItem/DialogItem";
import Message from './Message/Message'

let dialogsData = [
  {name: 'Liam', id: 1},
  {name: 'Oliver', id: 2},
  {name: 'Emma', id: 3},
  {name: 'Benjamin', id: 4},
  {name: 'Harper', id: 5},
]

let messageData = [
  {message: 'Dinner tonight?'},
  {message: 'How\'s the new coffe shop by you guys?'},
  {message: 'Call me back! 😘'},
  {message: 'Party tonnight??? 🍸'},
  {message: 'Thats sounds good. How is your Wednesday?'},
]

const Dialogs = () => {

  let dialogsDataItem = dialogsData.map((i =>
    <DialogItem name={i.name} id={i.id}/>
  ))

  let messageDataItem = messageData.map((i =>
    <Message message={i.message}/>
  ))
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