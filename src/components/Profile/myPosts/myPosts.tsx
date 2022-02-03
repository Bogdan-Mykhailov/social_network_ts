import {TextField, Button} from "@mui/material";
import React from "react";
import classes from './myPosts.module.css'
import Post from "./post/post";


let postsData = [
  {message: 'ABM corporation got a 450 bln dollars from Meta company.', count: 14515},
  {message: 'Bogdan, Andrii and Maryna create ABM corporation in 2021', count: 224513445}
]

const MyPosts = () => {
  let postDataItem = postsData.map(( i => <Post message={i.message} count={i.count}/>))
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