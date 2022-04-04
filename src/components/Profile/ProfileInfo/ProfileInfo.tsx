import React from 'react';
import classes from './ProfileInfo.module.css'
import photo from './photo.jpg'

const ProfileInfo = () => {
  return (
    <div className={classes.container}>

      <div className={classes.wallpaper}>
        <img
          src="https://cdn.pixabay.com/photo/2017/08/30/12/44/ukraine-2696944_960_720.jpg"/>
      </div>

      <div className={classes.avatar}>
        <img src={photo} alt="avatar"/>
      </div>
    </div>
  );
};

export default ProfileInfo;