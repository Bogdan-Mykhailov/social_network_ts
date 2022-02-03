import classes from './Message.module.css'
import React from "react";

type MessagePropsType = {
  message: string,
  id: number,
}

const Message = (props: MessagePropsType) => {
  return (
    <div>
      <div className={classes.message}>{props.message}</div>
    </div>
  );
};

export default Message;