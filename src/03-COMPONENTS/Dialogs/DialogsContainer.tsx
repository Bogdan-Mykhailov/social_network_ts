import React, {ChangeEvent, KeyboardEvent} from "react";
import {addNewMessageTextAC, DialogsReducerType} from "../../02-BLL/dialogs-reducer";
import {StoreTypeRedux, TypedDispatch} from "../../02-BLL/store";
import Dialogs from "./Dialogs";
import {connect} from "react-redux";
import myPosts from "../Profile/MyPosts/MyPosts";
import {compose, Dispatch} from "redux";
import {Redirect} from "react-router-dom";
import {WithAuthRedirect} from "../../05-HOC/WithAuthRedirect";

type mapStateToPropsType = {
  dialogsPage: DialogsReducerType
  isAuth: boolean
}
type mapDispatchToPropsType = {
  addMessageHandler: (values: string) => void
}
export type DialogsPropsType = mapStateToPropsType & mapDispatchToPropsType;

const mapStateToProps = (state: StoreTypeRedux): mapStateToPropsType  => {
  return {
    dialogsPage: state.dialogsPage,
    isAuth: state.auth.isAuth
  }
}

const mapDispatchToProps = (dispatch: TypedDispatch): mapDispatchToPropsType => {
  return {
    addMessageHandler: (values) => {
      dispatch(addNewMessageTextAC(values))
    }
  }
}

export default compose<React.ComponentType>(connect(mapStateToProps, mapDispatchToProps))(Dialogs);
