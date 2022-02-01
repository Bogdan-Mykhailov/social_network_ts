import classes from './DialogItem.module.css'
import {NavLink} from "react-router-dom";
import React from "react";


type DialogItemPropsType = {
  name: string,
  id: number
}

const DialogItem = (props: DialogItemPropsType) => {
  const path = '/dialogs/' + props.id
  return (
    <div>
      <div className={classes.dialogs + ' ' + classes.active}>
        <NavLink to={path}>{props.name}</NavLink>
      </div>
    </div>
  );
};

export default DialogItem;