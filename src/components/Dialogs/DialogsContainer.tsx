import React, {ChangeEvent, KeyboardEvent} from "react";
import {ActionsTypes} from "../../Redux/profile-reducer";
import {addNewMessageTextAC, DialogsReducerType, updateMessageAC} from "../../Redux/dialogs-reducer";
import {StoreTypeRedux} from "../../Redux/redux-store";
import Dialogs from "./Dialogs";
import {connect} from "react-redux";
import myPosts from "../Profile/MyPosts/MyPosts";
import {Dispatch} from "redux";
import {Redirect} from "react-router-dom";

type mapStateToPropsType = {
  newMessageText: string
  dialogsPage: DialogsReducerType
  isAuth: boolean
}
type mapDispatchToPropsType = {
  onClickAddMessageButtonHandler: () => void
  onChangeMessageHandler: (event: ChangeEvent<HTMLTextAreaElement>) => void
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
    onChangeMessageHandler: (event: ChangeEvent<HTMLTextAreaElement>) => {
      dispatch(updateMessageAC(event.currentTarget.value))
    }
  }
}

const AuthRedirectComponent = (props: DialogsPropsType) => {
  return <Dialogs {...props}/>
}

const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(AuthRedirectComponent)

export default DialogsContainer;

