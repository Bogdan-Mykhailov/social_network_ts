import React, {ChangeEvent, KeyboardEvent} from "react";
import {ActionsTypes} from "../../Redux/profile-reducer";
import {addNewMessageTextAC, DialogsReducerType, updateMessageAC} from "../../Redux/dialogs-reducer";
import {StoreTypeRedux} from "../../Redux/redux-store";
import Dialogs from "./Dialogs";
import {connect} from "react-redux";
import myPosts from "../Profile/MyPosts/MyPosts";
import {Dispatch} from "redux";

type mapStateToPropsType = {
  newMessageText: string
  dialogsPage: DialogsReducerType
}

type mapDispatchToPropsType = {
  onClickAddMessageButtonHandler: () => void
  // onKeyPressHandler: (event: KeyboardEvent<HTMLTextAreaElement>) => void
  onChangeMessageHandler: (event: ChangeEvent<HTMLTextAreaElement>) => void
}

export type DialogsPropsType = mapStateToPropsType & mapDispatchToPropsType;

const mapStateToProps = (state: StoreTypeRedux): mapStateToPropsType  => {
  return {
    newMessageText: state.dialogsPage.newMessageText,
    dialogsPage: state.dialogsPage
  }
}

const mapDispatchToProps = (dispatch: Dispatch): mapDispatchToPropsType => {
  return {

    onClickAddMessageButtonHandler: () => {
      dispatch(addNewMessageTextAC())
    },
    // onKeyPressHandler: (event: KeyboardEvent<HTMLTextAreaElement>) => {
    //   if (event.key === 'Enter') {
    //     onClickAddMessageButtonHandler()
    //   }
    // },
    onChangeMessageHandler: (event: ChangeEvent<HTMLTextAreaElement>) => {
      dispatch(updateMessageAC(event.currentTarget.value))
    }


  }
}

const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs)

export default DialogsContainer;

