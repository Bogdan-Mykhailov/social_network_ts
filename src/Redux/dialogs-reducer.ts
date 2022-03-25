import {ActionsTypes, realTime} from "./profile-reducer";
import { DialogsPageType, MessagesDataType} from "./Store";


export const addNewMessageTextAC = (messageText: string) => {
  return {
    type: 'ADD-NEW-MESSAGE-TEXT',
    messageText: messageText
  } as const
}
export const updateMessageAC = (updateMessage: string) => {
  return {
    type: 'UPDATE-NEW-MESSAGE-TEXT',
    updateMessage: updateMessage
  } as const
}

export const dialogsReducer = (state: DialogsPageType, action: ActionsTypes) => {

  switch (action.type) {
    case "ADD-NEW-MESSAGE-TEXT": {
      const newMessage: MessagesDataType = {
        id: new Date().getTime(),
        message: state.newMessageText,
        name: 'Pikachu',
        avatar: 'https://i.pinimg.com/originals/80/d8/e0/80d8e0232d36605e4fb8697353d4a4f2.gif',
        time: realTime
      };
      state.messageData.push(newMessage);
      state.newMessageText = '';
      return state;
    }
    case "UPDATE-NEW-MESSAGE-TEXT": {
      state.newMessageText = action.updateMessage;
      return state;
    }

    default:
      return state
  }
}