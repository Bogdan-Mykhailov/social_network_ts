import React from 'react';
import classes from './ProfileInfo.module.css'
import photo from './photo.jpg'
const ProfileInfo = () => {
  return (
    <div className={classes.container}>

      <div className={classes.wallpaper}>
        <img
          src="https://cdn.pixabay.com/photo/2018/09/19/23/03/sunset-3689760_1280.jpg"/>
      </div>

      <div className={classes.avatar}>
        <img src={photo} alt="avatar"/>
      </div>
    </div>
  );
};

export default ProfileInfo;