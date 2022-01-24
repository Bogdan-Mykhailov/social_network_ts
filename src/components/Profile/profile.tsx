import React from "react";
import classes from './profile.module.css'

const Profile = () => {
  return (
    <div className={classes.profile}>
      <div>
        <img src="https://cdn.pixabay.com/photo/2022/01/16/10/51/leaves-6941709_1280.jpg" alt=""/>
      </div>
      <div>avatar + description</div>
      <div>My posts
        <div>
          New post
        </div>
        <div className={classes.posts}>
          <div className={classes.item}>
            Post
          </div>
          <div className={classes.item}>
            Post
          </div>
        </div>
      </div>
    </div>
  )
}
export default Profile;