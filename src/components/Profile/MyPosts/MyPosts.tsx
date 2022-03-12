import React, {ChangeEvent, KeyboardEvent} from "react";
import classes from './MyPosts.module.css'
import Post from "./Post/Post";
import state from "../../../Redux/State";
import {RerenderEntireTree} from "../../../RerenderEntireTree";

type MyPostsPropsType = {
  id: number,
  message: string,
  count: number,
}
type MyPostsProps = {
  data: MyPostsPropsType[]
  addPost: (postText: string) => void
  updateNewPostText: (newPostText: string) => void
  newPostText: string
}

const MyPosts = (props: MyPostsProps) => {
  let postDataItem = props.data.map(i => <Post id={i.id} message={i.message} count={i.count}/>)

  let postMessageRef = React.createRef<HTMLTextAreaElement>()

  const onClickAddPostButtonHandler = () => {
      props.addPost(props.newPostText)
    RerenderEntireTree(state)
  }

  const onKeyPressHandler = (event: KeyboardEvent<HTMLTextAreaElement>) => {
    if (event.key === 'Enter') {
      onClickAddPostButtonHandler()
    }
  }

const onChangePostHandler = (event: ChangeEvent<HTMLTextAreaElement>) => {

      props.updateNewPostText(event.currentTarget.value)

}
  return (
    <div>
      <div className={classes.postsbar}>
        <div className={classes.postbarInside}>
          <div>
            <textarea value={props.newPostText} onChange={onChangePostHandler} style={{resize: 'none'}} onKeyPress={onKeyPressHandler} ref={postMessageRef}
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