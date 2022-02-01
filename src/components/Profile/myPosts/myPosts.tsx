import React from "react";
import classes from './myPosts.module.css'
import Post from "./post/post";

const MyPosts = () => {
  return (
    <div>
      <div>
        <input type="text" placeholder='Post'/>
      </div>
      <div>
        <button className='inputButton'>Add</button>
      </div>
      <div className={classes.post}>
        <Post message='ABM corporation got a 450 bln dollars from Meta company.' count={15}/>
        <Post message='Bogdan, Andrii and Maryna create ABM corporation in 2021' count={20}/>
      </div>
    </div>
  )
}
export default MyPosts;