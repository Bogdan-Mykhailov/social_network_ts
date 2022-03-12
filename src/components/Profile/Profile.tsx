import React from "react";
import classes from './Profile.module.css'
import MyPosts from "./MyPosts/MyPosts";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import {addPost, PostDataType} from "../../Redux/State";


type ProfilePropsType = {
  posts: PostDataType[]
  addPost: (postText: string) => void
}

const Profile = (props: ProfilePropsType) => {

  return (
    <div>
      <ProfileInfo/>
      <MyPosts data={props.posts} addPost={props.addPost}/>
    </div>
  )
}
export default Profile;
