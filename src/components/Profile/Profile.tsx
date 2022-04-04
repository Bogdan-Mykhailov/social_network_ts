import React from "react";
import classes from './Profile.module.css'
import MyPosts from "./MyPosts/MyPosts";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import {PostDataType} from "../../Redux/Store";
import store from "../../Redux/Store";
import { ActionsTypes } from "../../Redux/profile-reducer";
import MyPostsContainer from "./MyPosts/MyPostsContainer";
import {StoreTypeRedux} from "../../Redux/redux-store";



type ProfilePropsType = {
  store: StoreTypeRedux
}

const Profile = (props: ProfilePropsType) => {

  return (
    <div>
      <ProfileInfo/>
      <MyPostsContainer store={props.store} />
    </div>
  )
}
export default Profile;
