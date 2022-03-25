import React from "react";
import user from './user.png'
import classes from './Post.module.css'

type PostPropsType = {
  id: number,
  message: string,
  count: number,
  time: string
}

const Post = (props: PostPropsType) => {
  return (
    <div className={classes.item}>
      <img className={classes.postUserImg} src={user} alt="user"/>
      {props.message}
      <div>
        <span className={classes.like}>👍🏼</span>
        {props.count}
        <div>{props.time}</div>
      </div>
    </div>
  )
}
export default Post;