import {TextField, Fab} from "@mui/material";
import React from "react";
import classes from './MyPosts.module.css'
import Post from "./post/Post";

type MyPostsPropsType = {
  id: number,
  message: string,
  count: number,
}
type MyPostsProps = {
  data: MyPostsPropsType[]
}

const MyPosts = (props: MyPostsProps) => {
  let postDataItem = props.data.map((i => <Post id={i.id} message={i.message} count={i.count}/>))
  return (
    <div>
      <div className={classes.postsbar}>
        <div className={classes.postbarInside}>
          <div>
            <input className={classes.input + ' ' + classes.active} type="text" placeholder='Post'/>
          </div>
          <div>
            <button className={classes.add + ' ' + classes.active}>Add post</button>
          </div>
        </div>
      </div>
      <div className={classes.post}>
        {postDataItem}
      </div>
    </div>
  )
}
export default MyPosts;