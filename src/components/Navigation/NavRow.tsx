import {NavLink} from "react-router-dom";
import classes from './Navigation.module.css'
import React from "react";

type NawRowPropsType = {
  url: string,
  title: string,
  icon: any
}

const NavRow = (props: NawRowPropsType) => {
  return (
    <div className={classes.container}>
      <div className={classes.navbarItem}>
        {props.icon}
          <NavLink to={props.url} className={navData => navData.isActive ? `${classes.active} ${classes.item}` : classes.item}>
        <h4 className={classes.navbarTitle}>{props.title}</h4></NavLink>
      </div>
    </div>
  );
};
export default NavRow;
