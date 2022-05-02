import React from "react";
import classes from './Profile.module.css'
import MyPosts from "./MyPosts/MyPosts";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import {ActionsTypes, ProfileDataTypes} from "../../Redux/profile-reducer";
import MyPostsContainer from "./MyPosts/MyPostsContainer";
import {StoreTypeRedux} from "../../Redux/redux-store";

type ProfilePropsType = {
  profile: null | ProfileDataTypes
}

const Profile = (props: ProfilePropsType) => {

  return (
    <div>
      <ProfileInfo profile={props.profile}/>
      <MyPostsContainer/>
    </div>
  )
}
export default Profile;
