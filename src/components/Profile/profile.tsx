import React from "react";
import classes from './profile.module.css'
import MyPosts from "./myPosts/myPosts";
import Avatar from "../Avatar/avatar";

const Profile = () => {
  return (
    <div>
      <div>
        <img
          src="https://media.istockphoto.com/photos/several-lightning-strikes-during-a-strong-thunderstorm-over-the-lake-picture-id1257611243?k=20&m=1257611243&s=612x612&w=0&h=8q__ZdUQUGQWzLjAQBjdzsCgTVPGCp2MeyF7FOthb5o="
          alt="sky"/>
      </div>
      <Avatar/>
      <MyPosts/>
    </div>
  )
}
export default Profile;