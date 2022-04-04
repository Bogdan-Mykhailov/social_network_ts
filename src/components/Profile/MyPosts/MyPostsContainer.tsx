import React, {ChangeEvent, KeyboardEvent} from "react";
import {ActionsTypes, addPostAC, updatePostAC} from "../../../Redux/profile-reducer";
import MyPosts from "./MyPosts";
import {StoreTypeRedux} from "../../../Redux/redux-store";
import { RerenderEntireTree } from "../../../RerenderEntireTree";

export type MyPostsPropsType = {
  id: number
  name: string
  message: string
  count: number
  time: string
}
export type MyPostsProps = {
  store: StoreTypeRedux
}

const MyPostsContainer = (props: MyPostsProps) => {
  let state = props.store.getState()

  const onClickAddPostButtonHandler = () => {
    props.store.dispatch(addPostAC(state.profilePage.newPostText))
    RerenderEntireTree()
  }
  const onKeyPressHandler = (event: KeyboardEvent<HTMLTextAreaElement>) => {
    if (event.key === 'Enter') {
      onClickAddPostButtonHandler()
    }
  }
  const onChangePostHandler = (event: ChangeEvent<HTMLTextAreaElement>) => {
    props.store.dispatch(updatePostAC(event.currentTarget.value))
  }

  return (
    <MyPosts
      data={state.profilePage.postsData}
      newPostText={state.profilePage.newPostText}
      onChangePostHandler={onChangePostHandler}
      onKeyPressHandler={onKeyPressHandler}
      onClickAddPostButtonHandler={onClickAddPostButtonHandler}
    />
  )
}

export default MyPostsContainer;

