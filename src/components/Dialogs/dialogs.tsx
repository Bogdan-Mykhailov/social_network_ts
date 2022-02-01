import React from "react";
import classes from './dialogs.module.css'


const Dialogs = () => {
  return (
    <div className={classes.dialogs}>
      <div className={classes.dialogItems}>
        <div className={classes.dialog + ' ' + classes.active}>
          Liam
        </div>
        <div className={classes.dialog}>
          Oliver
        </div>
        <div className={classes.dialog}>
          Emma
        </div>
        <div className={classes.dialog}>
          Benjamin
        </div>
        <div className={classes.dialog}>
          Harper
        </div>
      </div>
      <div className={classes.messages}>
        <div className={classes.messageItem}>
          <div className={classes.message}>
            Dinner tonight?
          </div>
          <div className={classes.message}>
            How's the new coffe shop by you guys?
          </div>
          <div className={classes.message}>
            Call me back!
          </div>
          <div className={classes.message}>
            Party tonnight???
          </div>
          <div className={classes.message}>
            Thats sounds good. How is your Wednesday?
          </div>
        </div>
      </div>
    </div>
  );
}
export default Dialogs;