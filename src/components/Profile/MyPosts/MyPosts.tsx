import React, {ChangeEvent, KeyboardEvent} from "react";
import classes from './MyPosts.module.css'
import Post from "./Post/Post";
import {ActionsTypes, addPostAC, updatePostAC} from "../../../Redux/profile-reducer";
import {text} from "stream/consumers";
import {MyPostsProps} from "./MyPostsContainer";

const MyPosts = (props: MyPostsProps) => {

  let postDataItem = props.postMessage.map(i => <Post key={i.id}
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
        <div>
            <textarea value={props.newPostText}
                      onChange={props.onChangePostHandler}
                      style={{resize: 'none'}}
                      onKeyPress={props.onKeyPressHandler}
                      className={classes.textarea + ' ' + classes.active}/>
        </div>
        <div>
          <button onClick={props.onClickAddPostButtonHandler} className={classes.add + ' ' + classes.active}>Add post
          </button>
        </div>
      </div>
      <div className={classes.post}>
        {postDataItem}
      </div>
    </div>
  )
}

export default MyPosts;