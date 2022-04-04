import React, {ChangeEvent, KeyboardEvent} from "react";
import {DialogsDataType, MessagesDataType} from "../../Redux/Store";
import {ActionsTypes} from "../../Redux/profile-reducer";
import {addNewMessageTextAC, updateMessageAC} from "../../Redux/dialogs-reducer";
import {StoreTypeRedux} from "../../Redux/redux-store";
import Dialogs from "./Dialogs";
import { RerenderEntireTree } from "../../RerenderEntireTree";

export type DialogsPropsType = {
  store: StoreTypeRedux
}

const DialogsContainer = (props: DialogsPropsType) => {

  let state = props.store.getState().dialogsPage

  const onClickAddMessageButtonHandler = () => {
    props.store.dispatch(addNewMessageTextAC(state.newMessageText))
    RerenderEntireTree()
  }
  const onKeyPressHandler = (event: KeyboardEvent<HTMLTextAreaElement>) => {
    if (event.key === 'Enter') {
      onClickAddMessageButtonHandler()
    }
  }
  const onChangeMessageHandler = (event: ChangeEvent<HTMLTextAreaElement>) => {
    props.store.dispatch(updateMessageAC(event.currentTarget.value))

  }

  return <Dialogs
    dialogs={state.dialogsData}
    messages={state.messageData}
    newMessageText={state.newMessageText}
    onClickAddMessageButtonHandler={onClickAddMessageButtonHandler}
    onKeyPressHandler={onKeyPressHandler}
    onChangeMessageHandler={onChangeMessageHandler}/>
}
export default DialogsContainer;

