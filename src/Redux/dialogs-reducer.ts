import {ActionsTypes, realTime} from "./profile-reducer";

export type DialogsDataType = {
  id: number,
  name: string,
  avatar: string
}
export type MessagesDataType = {
  id: number,
  message: string,
  name: string,
  avatar: string,
  time: string
}
export type DialogsReducerType = {
  dialogsData: DialogsDataType[]
  messageData: MessagesDataType[]
  newMessageText: string
}

export enum ACTION_TYPE {
  ADD_NEW_MESSAGE_TEXT = 'ADD-NEW-MESSAGE-TEXT',
  UPDATE_NEW_MESSAGE_TEXT = 'UPDATE-NEW-MESSAGE-TEXT'
}
// const ADD_NEW_MESSAGE_TEXT = 'ADD-NEW-MESSAGE-TEXT';
// const UPDATE_NEW_MESSAGE_TEXT = 'UPDATE-NEW-MESSAGE-TEXT';

export const addNewMessageTextAC = () => {
  return {
    type: ACTION_TYPE.ADD_NEW_MESSAGE_TEXT,
  } as const
}
export const updateMessageAC = (updateMessage: string) => {
  return {
    type: ACTION_TYPE.UPDATE_NEW_MESSAGE_TEXT,
    updateMessage: updateMessage
  } as const
}

let initialState: DialogsReducerType = {
  dialogsData: [
    {
      id: 1,
      name: 'Diego',
      avatar: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRqzmJ9wvntTji6eHIO8hDtZD-uDi3ddfOCP5azpVJ4roYnNbtj3iMTMtnYiZxKlVnyd6M&usqp=CAU'
    },
    {
      id: 2,
      name: 'Taras',
      avatar: 'data:image/png;base64,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'
    },
    {id: 3, name: 'Madonna', avatar: 'https://c.tenor.com/5HkiNFxktYQAAAAM/vogue-face.gif'},
    {id: 4, name: 'Thomas', avatar: 'https://i.pinimg.com/originals/dd/31/d2/dd31d2dd156204fcf9b6aa1c54455adb.gif'},
    {
      id: 5,
      name: 'Pikachu',
      avatar: 'https://i.pinimg.com/originals/80/d8/e0/80d8e0232d36605e4fb8697353d4a4f2.gif'
    },
  ] as DialogsDataType[],
  messageData: [
    {
      id: 1,
      name: 'Liam',
      message: 'Dinner tonight?',
      avatar: 'https://cdn.pixabay.com/photo/2021/10/13/11/29/girl-6706267__340.jpg',
      time: '12:17'
    },
    {
      id: 2, name: 'Oliver',
      message: 'How\'s the new coffe shop by you guys dljhfgsdhfs oisdfoshfskdhfr sdfosdfo shfdl sdhflk s sdfl jsldf  he new coffe  coffe shop by you guys dljhfgsdhfs oisdfoshfskdhfr sdfosdfo shfdl sdhflk s sdfl jsldfhe new coffe shop by you guys dljhfgsdhfs oisdfoshfskdhfr sdfosdfo shfdl sdhflk s sdfl jsldfsdlf jsldf sdf ',
      avatar: 'https://cdn.pixabay.com/photo/2021/10/13/11/29/girl-6706267__340.jpg',
      time: '23:22'
    },
    {
      id: 3,
      name: 'Emma',
      message: 'Call me back! 😘',
      avatar: 'https://cdn.pixabay.com/photo/2021/10/13/11/29/girl-6706267__340.jpg',
      time: '20:04'
    },
    {
      id: 4,
      name: 'Benjamin',
      message: 'Party tonnight??? 🍸',
      avatar: 'https://cdn.pixabay.com/photo/2021/10/13/11/29/girl-6706267__340.jpg',
      time: '07:23'
    },
    {
      id: 5,
      name: 'Harper',
      message: 'Thats sounds good. How is your Wednesday?',
      avatar: 'https://cdn.pixabay.com/photo/2021/10/13/11/29/girl-6706267__340.jpg',
      time: '14:57'
    },
  ],
  newMessageText: ''
}

export const dialogsReducer = (state: DialogsReducerType = initialState, action: ActionsTypes): DialogsReducerType => {


  switch (action.type) {
    case ACTION_TYPE.ADD_NEW_MESSAGE_TEXT: {
      const newMessage: MessagesDataType = {
        id: new Date().getTime(),
        message: state.newMessageText,
        name: 'Pikachu',
        avatar: 'https://i.pinimg.com/originals/80/d8/e0/80d8e0232d36605e4fb8697353d4a4f2.gif',
        time: realTime
      };
      return {...state, newMessageText: '', messageData: [...state.messageData, newMessage]};
    }
    case ACTION_TYPE.UPDATE_NEW_MESSAGE_TEXT: {
      state.newMessageText = action.updateMessage;
      return {...state, newMessageText: action.updateMessage};
    }

    default:
      return state
  }
}