import React from "react";
import classes from './Profile.module.css'
import MyPosts from "./myPosts/MyPosts";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import {PostDataType} from "../../redux/State";


type ProfilePropsType = {
  posts: PostDataType[]
}

const Profile = (props: ProfilePropsType) => {

  return (
    <div>
      <ProfileInfo/>
      <MyPosts data={props.posts}/>
    </div>
  )
}
export default Profile;
