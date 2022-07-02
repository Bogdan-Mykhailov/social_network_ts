import React, {ChangeEvent, KeyboardEvent} from "react";
import {addPostAC, PostDataType} from "../../../02-BLL/profile-reducer";
import MyPosts from "./MyPosts";
import {StoreTypeRedux} from "../../../02-BLL/store";
import myPosts from "./MyPosts";
import { Dispatch } from "redux";
import { connect } from "react-redux";

type mapStateToPropsType = {
  postMessage: PostDataType[]
}
type mapDispatchToPropsType = {
  addPostHandler: (values: string) => void
}

export type MyPostsProps = mapStateToPropsType & mapDispatchToPropsType

const mapStateToProps = (state: StoreTypeRedux): mapStateToPropsType  => {
  return {
    postMessage: state.profilePage.postsData
  }
}

const mapDispatchToProps = (dispatch: Dispatch): mapDispatchToPropsType => {

  return {
    addPostHandler: (values) => {
      dispatch(addPostAC(values))
    }
  }
}

const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(myPosts)

export default MyPostsContainer;
