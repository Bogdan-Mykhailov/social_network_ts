import React, {ChangeEvent, KeyboardEvent} from "react";
import {addPostAC, PostDataType, updatePostAC} from "../../../Redux/profile-reducer";
import MyPosts from "./MyPosts";
import {StoreTypeRedux} from "../../../Redux/redux-store";
import myPosts from "./MyPosts";
import { Dispatch } from "redux";
import { connect } from "react-redux";

type mapStateToPropsType = {
  newPostText: string
  postMessage: PostDataType[]
}
type mapDispatchToPropsType = {
  onClickAddPostButtonHandler: () => void
  onKeyPressHandler: (event: KeyboardEvent<HTMLTextAreaElement>) => void
  onChangePostHandler: (event: ChangeEvent<HTMLTextAreaElement>) => void
}

export type MyPostsProps = mapStateToPropsType & mapDispatchToPropsType

const mapStateToProps = (state: StoreTypeRedux): mapStateToPropsType  => {
  return {
    newPostText: state.profilePage.newPostText,
    postMessage: state.profilePage.postsData
  }
}

const mapDispatchToProps = (dispatch: Dispatch): mapDispatchToPropsType => {

  return {
    onClickAddPostButtonHandler: () => {
      dispatch(addPostAC())
    },
    onKeyPressHandler: (event: KeyboardEvent<HTMLTextAreaElement>) => {
      if (event.key === 'Enter') {
        dispatch(addPostAC())
      }
    },
    onChangePostHandler: (event: ChangeEvent<HTMLTextAreaElement>) => {
      dispatch(updatePostAC(event.currentTarget.value))
    }
  }
}


const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(myPosts)


export default MyPostsContainer;
