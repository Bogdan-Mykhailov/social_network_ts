import React from 'react';
import inProgress from "../../Users/assets/inProgress.svg";

export const Preloader = () => {

  return (
    <div>
      <img src={inProgress} alt='preloader'/>
    </div>
  );
};