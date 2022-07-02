import React from "react";
import classes from './MyPosts.module.css'
import Post from "./Post/Post";
import {MyPostsProps} from "./MyPostsContainer";
import {MyPostsForm} from "./MyPostsForm";

const MyPosts = (props: MyPostsProps) => {

  let postDataItem = props.postMessage.map(i => <Post
      key={i.id}
      id={i.id}
      name={i.name}
      message={i.message}
      count={i.count}
      time={i.time}
    />
  )

  return (
    <div className={classes.wraper}>
      <div className={classes.postsbar}>
        <MyPostsForm addPostHandler={props.addPostHandler}/>
      </div>
      <div className={classes.post}>
        {postDataItem}
      </div>
    </div>
  )
}

export default MyPosts;