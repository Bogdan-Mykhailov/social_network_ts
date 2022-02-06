import classes from './Message.module.css'
import React from "react";
import {MessagesDataType} from "../../../redux/State";


const Message = (props: MessagesDataType) => {
  return (
    <div>
      <div className={classes.message}>{props.message}</div>
    </div>
  );
};

export default Message;