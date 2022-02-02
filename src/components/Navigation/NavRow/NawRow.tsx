import {NavLink} from "react-router-dom";
import classes from "../navigation.module.css";
import React from "react";


type NawRowPropsType = {
  url: string,
  title: string
}

const NavRow = (props: NawRowPropsType) => {
  return (
    <div>
      <div >
        <NavLink to={props.url} className = { navData => navData.isActive ? classes.active : classes.item }>{props.title}</NavLink>
      </div>
    </div>
  );
};
export default NavRow;