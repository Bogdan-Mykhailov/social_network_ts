import React from "react";
import {NavLink} from "react-router-dom";
import classes from './dialogs.module.css'
import DialogItem from "./DialogItem/DialogItem";
import Message from './Message/Message'

const Dialogs = () => {
  return (
    <div className={classes.dialogs}>
      <div className={classes.dialogItems}>
        <DialogItem name='Liam' id={1}/>
        <DialogItem name='Oliver' id={2}/>
        <DialogItem name='Emma' id={3}/>
        <DialogItem name='Benjamin' id={4}/>
        <DialogItem name='Harper' id={5}/>
      </div>
      <div className={classes.messages}>
        <div className={classes.messageItem}>
          <Message message='Dinner tonight?'/>
          <Message message="How's the new coffe shop by you guys?"/>
          <Message message='Call me back!'/>
          <Message message='Party tonnight???'/>
          <Message message='Thats sounds good. How is your Wednesday?'/>
        </div>
      </div>
    </div>
  );
}
export default Dialogs;