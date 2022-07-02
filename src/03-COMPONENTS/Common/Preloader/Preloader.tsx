import React from 'react';
import inProgress from "../../Users/assets/inProgress.svg";
import classes from './Preloader.module.css'

export const Preloader = () => {

  return (
    <div className={classes.preloader}>
      <img src={inProgress} alt='preloader'/>
    </div>
  );
};