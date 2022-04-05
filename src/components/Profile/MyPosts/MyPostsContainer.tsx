import React, {ChangeEvent, KeyboardEvent} from "react";
import {ActionsTypes, addPostAC, updatePostAC} from "../../../Redux/profile-reducer";
import MyPosts from "./MyPosts";
import {StoreTypeRedux} from "../../../Redux/redux-store";
import {RerenderEntireTree} from "../../../RerenderEntireTree";
import StoreContext from "../../../StoreContext";

const MyPostsContainer = () => {

  return (
    <StoreContext.Consumer>
      {
        store => {

          let state = store.getState()

          const onClickAddPostButtonHandler = () => {
            store.dispatch(addPostAC(store.getState().profilePage.newPostText))
            RerenderEntireTree()
          }
          const onKeyPressHandler = (event: KeyboardEvent<HTMLTextAreaElement>) => {
            if (event.key === 'Enter') {
              onClickAddPostButtonHandler()
            }
          }
          const onChangePostHandler = (event: ChangeEvent<HTMLTextAreaElement>) => {
            store.dispatch(updatePostAC(event.currentTarget.value))
          }

          return <MyPosts data={state.profilePage.postsData}
                          newPostText={state.profilePage.newPostText}
                          onChangePostHandler={onChangePostHandler}
                          onKeyPressHandler={onKeyPressHandler}
                          onClickAddPostButtonHandler={onClickAddPostButtonHandler}
          />
        }
      }
    </StoreContext.Consumer>
  )
}

export default MyPostsContainer;
