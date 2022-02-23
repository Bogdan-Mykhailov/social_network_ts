import React from "react";
import classes from './MyPosts.module.css'
import Post from "./Post/Post";

type MyPostsPropsType = {
  id: number,
  message: string,
  count: number,
}
type MyPostsProps = {
  data: MyPostsPropsType[]
}

const MyPosts = (props: MyPostsProps) => {
  let postDataItem = props.data.map(i => <Post id={i.id} message={i.message} count={i.count}/>)

  let postMessageRef = React.createRef<HTMLTextAreaElement>()


  const onClickAddPostButtonHandler = () => {
    alert(postMessageRef.current?.value)
  }

  return (
    <div>
      <div className={classes.postsbar}>
        <div className={classes.postbarInside}>
          <div>
            <textarea ref={postMessageRef} className={classes.textarea + ' ' + classes.active}></textarea>
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