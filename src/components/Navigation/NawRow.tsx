import {NavLink} from "react-router-dom";
import classes from './Navigation.module.css'
import React from "react";


type NawRowPropsType = {
  url: string,
  title: string,
  icon?: any
}

const NavRow = (props: NawRowPropsType) => {
  return (
    <div className={classes.container}>
      <div className={classes.nawbarItem}>
        {props.icon}
        <h4>
          <NavLink to={props.url}
                   className={navData => navData.isActive ? classes.active : classes.item}>{props.title}</NavLink>
        </h4>
      </div>
    </div>
  );
};
export default NavRow;