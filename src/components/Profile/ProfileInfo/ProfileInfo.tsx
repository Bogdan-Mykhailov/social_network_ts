import React from 'react';
import classes from './ProfileInfo.module.css'
import photo from './photo.jpg'

import {Preloader} from "../../Common/Preloader/Preloader";
import {ProfileDataTypes} from "../../../Redux/profile-reducer";

type ProfileInfoPropsType = {
  profile: null | ProfileDataTypes
}

const ProfileInfo = (props: ProfileInfoPropsType) => {

  if (!props.profile) {
    return <Preloader/>
  }

  return (
    <div className={classes.container}>

      <div className={classes.wallpaper}>
        <img
          src="https://cdn.pixabay.com/photo/2017/08/30/12/44/ukraine-2696944_960_720.jpg"/>
      </div>

      <div className={classes.avatar}>
        <img src={props.profile.photos.large} alt="avatar"/>
        <span className={classes.nameTitle}>{props.profile.fullName}</span>
      </div>
    </div>
  );
};

export default ProfileInfo;

