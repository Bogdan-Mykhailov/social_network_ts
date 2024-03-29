import React from 'react';
import { DialogsDataType } from '../../Redux/dialogs-reducer';
import classes from './SideBar.module.css'

type SideBarPropsType = {
  contactsData: DialogsDataType[]
}

export const SideBar = (props: SideBarPropsType) => {
  return (
    <div className={classes.sideBar}>

      <div className={classes.contactsTitle}><h4>Contacts</h4></div>

      {props.contactsData.map(c => <div
          key={c.id}
          className={classes.contacts}>
          <img className={classes.avatar}
               src={c.avatar} alt="avatarka"/>
          <h4 className={classes.contactName}>{c.name}</h4>
        </div>
      )}
    </div>
  );
};