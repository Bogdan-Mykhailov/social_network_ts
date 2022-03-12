import React, {KeyboardEvent} from "react";
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
}

const MyPosts = (props: MyPostsProps) => {
  let postDataItem = props.data.map(i => <Post id={i.id} message={i.message} count={i.count}/>)

  let postMessageRef = React.createRef<HTMLTextAreaElement>()

  const onClickAddPostButtonHandler = () => {
    if (postMessageRef.current) {
      props.addPost(postMessageRef.current.value)
      postMessageRef.current.value = ''
    }
    RerenderEntireTree(state)
  }

  const onKeyPressHandler = (event: KeyboardEvent<HTMLTextAreaElement>) => {
    if (event.key === 'Enter') {
      onClickAddPostButtonHandler()
    }
  }

  return (
    <div>
      <div className={classes.postsbar}>
        <div className={classes.postbarInside}>
          <div>
            <textarea style={{resize: 'none'}} onKeyPress={onKeyPressHandler} ref={postMessageRef}
                      className={classes.textarea + ' ' + classes.active}></textarea>
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