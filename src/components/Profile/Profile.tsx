import React from "react";
import classes from './Profile.module.css'
import MyPosts from "./MyPosts/MyPosts";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import {PostDataType} from "../../Redux/Store";
import store from "../../Redux/Store";
import { ActionsTypes } from "../../Redux/profile-reducer";



type ProfilePropsType = {
  posts: PostDataType[]
  dispatch: (action: ActionsTypes) => void
  newPostText: string
}

const Profile = (props: ProfilePropsType) => {

  return (
    <div>
      <ProfileInfo/>
      <MyPosts data={props.posts} dispatch={props.dispatch} newPostText={props.newPostText}/>
    </div>
  )
}
export default Profile;
