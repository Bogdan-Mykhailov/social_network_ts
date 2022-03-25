import React, {ChangeEvent, KeyboardEvent} from "react";
import classes from './MyPosts.module.css'
import Post from "./Post/Post";
import state from "../../../Redux/Store";
import {RerenderEntireTree} from "../../../RerenderEntireTree";
import { ActionsTypes, addPostAC, updatePostAC } from "../../../Redux/profile-reducer";

type MyPostsPropsType = {
  id: number,
  message: string,
  count: number,
  time: string
}
type MyPostsProps = {
  data: MyPostsPropsType[]
  dispatch: (action: ActionsTypes) => void
  newPostText: string
}

const MyPosts = (props: MyPostsProps) => {
  let postDataItem = props.data.map(i => <Post key={i.id} id={i.id} message={i.message} count={i.count} time={i.time}/>)
  const onClickAddPostButtonHandler = () => {
    props.dispatch(addPostAC(props.newPostText))
    RerenderEntireTree()
  }
  const onKeyPressHandler = (event: KeyboardEvent<HTMLTextAreaElement>) => {
    if (event.key === 'Enter') {
      onClickAddPostButtonHandler()
    }
  }
  const onChangePostHandler = (event: ChangeEvent<HTMLTextAreaElement>) => {
    props.dispatch(updatePostAC(event.currentTarget.value))
  }

  return (
    <div className={classes.wraper}>
      <div className={classes.postsbar}>
        <div className={classes.postbarInside}>
          <div>
            <textarea value={props.newPostText}
                      onChange={onChangePostHandler}
                      style={{resize: 'none'}}
                      onKeyPress={onKeyPressHandler}
                      className={classes.textarea + ' ' + classes.active}/>
          </div>
          <div>
            <button onClick={onClickAddPostButtonHandler} className={classes.add + ' ' + classes.active}>Add post
            </button>
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