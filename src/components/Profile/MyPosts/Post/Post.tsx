import React from "react";
import classes from './Post.module.css'
import ThumbUpOutlinedIcon from '@mui/icons-material/ThumbUpOutlined';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import MapsUgcOutlinedIcon from '@mui/icons-material/MapsUgcOutlined';

type PostPropsType = {
  id: number
  name: string
  message: string
  count: number
  time: string
}

const Post = (props: PostPropsType) => {
  return (
    <div className={classes.wrapper}>
      <hr/>
      <div className={classes.postItem}>
        <div className={classes.imgWrapper}>
          <img className={classes.postUserImg}
               src={'https://i.pinimg.com/originals/dd/31/d2/dd31d2dd156204fcf9b6aa1c54455adb.gif'} alt="neo"/>
        </div>

        <div className={classes.postText}>
          <div className={classes.name}>{props.name}</div>
          <div className={classes.text}>
            {props.message}
          </div>
        </div>
        <div className={classes.time}>
          {props.time}
        </div>
      </div>
      <div className={classes.likeWrapper}>
        <div className={classes.likeIcons}>
          <ThumbUpOutlinedIcon/>
          <FavoriteBorderOutlinedIcon/>
          <MapsUgcOutlinedIcon/>
        </div>
        <div className={classes.count}>
          <span>{props.count}</span>
        </div>
      </div>
    </div>
  )
}
export default Post;