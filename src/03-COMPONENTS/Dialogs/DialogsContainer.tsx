import React, {ChangeEvent, KeyboardEvent} from "react";
import {addNewMessageTextAC, DialogsReducerType, updateMessageAC} from "../../02-BLL/dialogs-reducer";
import {StoreTypeRedux} from "../../02-BLL/store";
import Dialogs from "./Dialogs";
import {connect} from "react-redux";
import myPosts from "../Profile/MyPosts/MyPosts";
import {compose, Dispatch} from "redux";
import {Redirect} from "react-router-dom";
import {WithAuthRedirect} from "../../05-HOC/WithAuthRedirect";

type mapStateToPropsType = {
  newMessageText: string
  dialogsPage: DialogsReducerType
  isAuth: boolean
}
type mapDispatchToPropsType = {
  onClickAddMessageButtonHandler: () => void
  onChangeMessageHandler: (event: ChangeEvent<HTMLTextAreaElement>) => void
  onKeyPressHandler: (e: KeyboardEvent<HTMLTextAreaElement>) => void
}
export type DialogsPropsType = mapStateToPropsType & mapDispatchToPropsType;

const mapStateToProps = (state: StoreTypeRedux): mapStateToPropsType  => {
  return {
    newMessageText: state.dialogsPage.newMessageText,
    dialogsPage: state.dialogsPage,
    isAuth: state.auth.isAuth
  }
}

const mapDispatchToProps = (dispatch: Dispatch): mapDispatchToPropsType => {
  return {
    onClickAddMessageButtonHandler: () => {
      dispatch(addNewMessageTextAC())
    },
    onKeyPressHandler: (e: KeyboardEvent<HTMLTextAreaElement>) => {
      if (e.key === 'Enter') {
        dispatch(addNewMessageTextAC())
      }
    },
    onChangeMessageHandler: (event: ChangeEvent<HTMLTextAreaElement>) => {
      dispatch(updateMessageAC(event.currentTarget.value))
    }
  }
}

export default compose<React.ComponentType>(connect(mapStateToProps, mapDispatchToProps))(Dialogs);
