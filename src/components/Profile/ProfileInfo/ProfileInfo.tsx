import React from 'react';
import MyPosts from "../myPosts/MyPosts";
import classes from './ProfileInfo.module.css'

const ProfileInfo = () => {
  return (
    <div className={classes.container}>

      <div className={classes.wallpaper}>
        <img
          src="http://t0.gstatic.com/licensed-image?q=tbn:ANd9GcTNahDrhRnvXhOfNbQANdrroojwfoQrGX8KSQUfnERS_CRcU669Mo7xY51E-wriWreZttIL0XTs_cZGfOkcmvE9SGY0MO8H"/>
      </div>

      <div className={classes.avatar}>
        <img src="https://cdn.pixabay.com/photo/2013/07/13/12/07/avatar-159236_1280.png" alt="avatar"/>
      </div>
    </div>
  );
};

export default ProfileInfo;