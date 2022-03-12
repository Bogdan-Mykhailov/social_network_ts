import React from "react";
import classes from './Profile.module.css'
import MyPosts from "./MyPosts/MyPosts";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import {addPost, PostDataType} from "../../Redux/State";


type ProfilePropsType = {
  posts: PostDataType[]
  addPost: (postText: string) => void
  updateNewPostText: (newPostText: string) => void
  newPostText: string
}

const Profile = (props: ProfilePropsType) => {

  return (
    <div>
      <ProfileInfo/>
      <MyPosts data={props.posts} addPost={props.addPost} newPostText={props.newPostText} updateNewPostText={props.updateNewPostText}/>
    </div>
  )
}
export default Profile;
