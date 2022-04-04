import { addNewMessageTextAC, updateMessageAC } from "./dialogs-reducer";
import {PostDataType, ProfilePageType} from "./Store";

export type ActionsTypes =
  ReturnType<typeof addPostAC> |
  ReturnType<typeof updatePostAC> |
  ReturnType<typeof addNewMessageTextAC> |
  ReturnType<typeof updateMessageAC>

const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';

export const addPostAC = (postText: string) => {
  return {
    type: ADD_POST,
    postText: postText
  } as const
}
export const updatePostAC = (newText: string) => {
  return {
    type: UPDATE_NEW_POST_TEXT,
    newText: newText
  } as const
}

export let realTime = `${new Date().getHours()} : ${(new Date().getMinutes() < 10 ? '0' : '') + new Date().getMinutes()}`

let initialState = {
  postsData: [
    {id: 1, name: 'Neo', message: 'Нравится - не нравится, империя развалится. Свинособаки', count: 14515, time: '12:00'},
    {id: 2, name: 'Neo', message: 'Русский военный корабль, иди нахуй! 🖕🏻', count: 22563, time: '12:00'}
  ],
  newPostText: ''
}

export const profileReducer = (state: ProfilePageType = initialState, action: ActionsTypes) => {

  switch (action.type) {
    case ADD_POST: {
      const newPost: PostDataType = {
        id: new Date().getTime(),
        name: 'Neo',
        message: action.postText,
        count: 0,
        time: realTime
      };
      state.postsData.push(newPost);
      state.newPostText = ''
      return state;
    }
    case UPDATE_NEW_POST_TEXT: {
      state.newPostText = action.newText;
      return state;
    }

    default:
      return state;
  }
}