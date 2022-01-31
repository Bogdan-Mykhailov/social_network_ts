import React from "react";
import classes from './dialogs.module.css'
import DialogItem from "./DialogItem/dialogItem";
import Messages from "./Messages/messages";




const Dialogs = () => {
    return (
      <div className={classes.dialogs}>
        <div className={classes.dialogsItem}>
            <DialogItem name='Diego Maradona' id={1}/>
            <DialogItem name='Gabriel Batisstuta' id={2}/>
            <DialogItem name='Carlos Tevez' id={3}/>
            <DialogItem name='Diego Simeone' id={4}/>
            <DialogItem name='Lionel Messi' id={5}/>
        </div>
        <div className={classes.messages}>
          <Messages  id={1} title='Hi'/>
          <Messages  id={2} title='me'/>
          <Messages  id={3} title='hello'/>
          <Messages  id={4} title='no'/>
          <Messages  id={5} title='beach'/>
        </div>
      </div>
    );
}
export default Dialogs;