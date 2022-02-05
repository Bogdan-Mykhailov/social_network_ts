import {TextField, Button} from "@mui/material";
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
      <div>
        <TextField label="Post" id="fullWidth" className={classes.textField}/>
      </div>
      <div>
        <Button size="small" className={classes.btn}>Add</Button>
      </div>
      <div className={classes.post}>
        {postDataItem}
      </div>
    </div>
  )
}
export default MyPosts;