import React from "react";
import classes from './Profile.module.css'
import MyPosts from "./MyPosts/MyPosts";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import {ActionsTypes} from "../../Redux/profile-reducer";
import MyPostsContainer from "./MyPosts/MyPostsContainer";
import {StoreTypeRedux} from "../../Redux/redux-store";
import {UsersDataType} from "../../Redux/users-reducer";

type ProfilePropsType = {
  profile: UsersDataType
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
