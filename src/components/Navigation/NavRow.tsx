import {NavLink} from "react-router-dom";
import classes from './Navigation.module.css'
import React from "react";

type NavRowPropsType = {
  url: string,
  title: string,
  icon: JSX.Element
}

const NavRow = (props: NavRowPropsType) => {
  return (
    <div className={classes.container}>
      <NavLink to={props.url}
               className={navData => navData.isActive ? `${classes.active} ${classes.item}` : classes.item}>
        <div className={classes.navbarItem}>
          {props.icon}
          <h4 className={classes.navbarTitle}>{props.title}</h4>
        </div>
      </NavLink>
    </div>
  );
};
export default NavRow;
