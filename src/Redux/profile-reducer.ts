import {addNewMessageTextAC, updateMessageAC} from "./dialogs-reducer";
import {followAC, setUsersAC, unfollowAC} from "./users-reducer";

export type ActionsTypes =
  ReturnType<typeof addPostAC> |
  ReturnType<typeof updatePostAC> |
  ReturnType<typeof addNewMessageTextAC> |
  ReturnType<typeof updateMessageAC> |
  ReturnType<typeof followAC> |
  ReturnType<typeof unfollowAC> |
  ReturnType<typeof setUsersAC>

export type PostDataType = {
  id: number,
  name: string
  message: string,
  count: number
  time: string
}
export type ProfileReducerType = {
  postsData: PostDataType[]
  newPostText: string
}


// еще один вариант использования типов
export enum ACTION_TYPE {
  ADD_POST = 'ADD-POST',
  UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT'
}

// const ADD_POST = 'ADD-POST';
// const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';

export const addPostAC = () => {
  return {
    type: ACTION_TYPE.ADD_POST,
  } as const
}
export const updatePostAC = (newText: string) => {
  return {
    type: ACTION_TYPE.UPDATE_NEW_POST_TEXT,
    newText: newText
  } as const
}

export let realTime = `${new Date().getHours()} : ${(new Date().getMinutes() < 10 ? '0' : '') + new Date().getMinutes()}`


let initialState: ProfileReducerType = {
  postsData: [
    {id: 1, name: 'Neo', message: 'Нравится - не нравится, империя развалится.', count: 14515, time: '12:00'},
    {id: 2, name: 'Neo', message: 'Русский военный корабль, иди нахуй!', count: 22563, time: '12:00'}
  ] as PostDataType[],
  newPostText: ''
}

export const profileReducer = (state: ProfileReducerType = initialState, action: ActionsTypes): ProfileReducerType => {

  switch (action.type) {
    case ACTION_TYPE.ADD_POST: {
      const newPost: PostDataType = {
        id: new Date().getTime(),
        name: 'Neo',
        message: state.newPostText,
        count: 0,
        time: realTime
      };
      return {...state, newPostText: '', postsData: [...state.postsData, newPost]};
    }
    case ACTION_TYPE.UPDATE_NEW_POST_TEXT: {
      state.newPostText = action.newText;
      return {...state, newPostText: action.newText};
    }

    default:
      return state;
  }
}