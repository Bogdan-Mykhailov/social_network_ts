import {NavLink} from "react-router-dom";
import classes from './NawRow.module.css'
import React from "react";


type NawRowPropsType = {
  url: string,
  title: string,
  icon?: any
}

const NavRow = (props: NawRowPropsType) => {
  return (
    <div>
      <div >
        {props.icon}
        <NavLink to={props.url} className = { navData => navData.isActive ? classes.active : classes.item }>{props.title}</NavLink>

      </div>
    </div>
  );
};
export default NavRow;