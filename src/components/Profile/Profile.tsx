import React from "react";
import classes from './Profile.module.css'
import MyPosts from "./MyPosts/MyPosts";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import {ActionsTypes, ProfileDataTypes} from "../../Redux/profile-reducer";
import MyPostsContainer from "./MyPosts/MyPostsContainer";
import {StoreTypeRedux} from "../../Redux/redux-store";

type ProfilePropsType = {
  profile: null | ProfileDataTypes
  status: string
  updateUserStatus: (status: string) => void
}

const Profile = (props: ProfilePropsType) => {

  return (
    <div>
      <ProfileInfo profile={props.profile} status={props.status} updateUserStatus={props.updateUserStatus}/>
      <MyPostsContainer/>
    </div>
  )
}
export default Profile;
