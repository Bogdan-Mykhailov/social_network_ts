import React from "react";
import classes from './myPosts.module.css'
import Post from "./post/post";

const MyPosts = () => {
  return (
    <div>
      My posts
      <div>
        <input type="text"/>
        <button>Add post</button>
      </div>
      <div className={classes.posts}>
        <Post message='ABM corporation got a 450 bln dollars from Meta company.' count={15}/>
        <Post message='London is a capital of Great Britain' count={20}/>
      </div>
    </div>
  )
}
export default MyPosts;