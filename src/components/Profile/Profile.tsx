import React from "react";
import classes from './Profile.module.css'
import MyPosts from "./MyPosts/MyPosts";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import {ActionsTypes} from "../../Redux/profile-reducer";
import MyPostsContainer from "./MyPosts/MyPostsContainer";
import {StoreTypeRedux} from "../../Redux/redux-store";

const Profile = () => {

  return (
    <div>
      <ProfileInfo/>
      <MyPostsContainer/>
    </div>
  )
}
export default Profile;
