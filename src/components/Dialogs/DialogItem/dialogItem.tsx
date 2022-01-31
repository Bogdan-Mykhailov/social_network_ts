import React from 'react';
import './dialogItem.module.css'
import {NavLink} from "react-router-dom";

type dialogItemPropsType = {
  name: string,
  id: number
}


const DialogItem = (props: dialogItemPropsType) => {
  const path = '/dialogs/' + props.id
  return (
    <div>
        <NavLink to={path}>{props.name}</NavLink>
    </div>
  );
};

export default DialogItem;