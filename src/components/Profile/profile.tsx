import React from "react";
import classes from './profile.module.css'
import MyPosts from "./myPosts/myPosts";

const Profile = () => {
  return (
    <div className={classes.profile}>
      <div>
        <img src="https://cdn.pixabay.com/photo/2022/01/16/10/51/leaves-6941709_1280.jpg" alt=""/>
      </div>
      <div>avatar + description</div>
      <MyPosts/>
    </div>
  )
}
export default Profile;