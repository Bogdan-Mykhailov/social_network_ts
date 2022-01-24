import React from "react";
import user from './user.png'
import classes from './post.module.css'


const Post = (props: any) => {
  return (
    <div className={classes.item}>
      <img src={user} alt="user"/>
      {props.message}
      <div>
        <span>👍🏿</span>
        {props.count}
      </div>
    </div>
  )
}
export default Post;