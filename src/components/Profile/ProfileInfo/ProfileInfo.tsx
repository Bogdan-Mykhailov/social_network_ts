import React from 'react';
import classes from './ProfileInfo.module.css'
import photo from './photo.jpg'
import {UsersDataType} from "../../../Redux/users-reducer";
import {Preloader} from "../../Common/Preloader/Preloader";

type ProfileInfoPropsType = {
  profile: null |UsersDataType
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
        <div>{props.profile.aboutMe}</div>
        <div>{props.profile.contacts.github}</div>
        <div>{props.profile.contacts.facebook}</div>
      </div>
    </div>
  );
};

export default ProfileInfo;

