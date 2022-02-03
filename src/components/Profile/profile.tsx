import React from "react";
import classes from './profile.module.css'
import MyPosts from "./myPosts/myPosts";
import Avatar from "../Avatar/avatar";
import ProfileInfo from "./ProfileInfo/ProfileInfo";

type PostsPropsDataType = {
  id: number,
  message: string,
  count: number
}

type PropfilePropsType = {
  posts: Array<PostsPropsDataType>
}

const Profile = (props: PropfilePropsType) => {

  return (
    <div>
      <ProfileInfo/>
      <MyPosts data={props.posts}/>
    </div>
  )
}
export default Profile;
