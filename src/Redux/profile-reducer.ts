import {addNewMessageTextAC, updateMessageAC} from "./dialogs-reducer";
import {follow, setCurrentPage, setUsers, unfollow} from "./users-reducer";
import {profileAPI} from "../api/api";
import {Dispatch} from "redux";

export type ActionsTypes =
  ReturnType<typeof addPostAC> |
  ReturnType<typeof updatePostAC> |
  ReturnType<typeof addNewMessageTextAC> |
  ReturnType<typeof updateMessageAC> |
  ReturnType<typeof setUserProfile>

export type PostDataType = {
  id: number,
  name: string
  message: string,
  count: number
  time: string
}

export type ProfileDataTypes = {
  aboutMe: string
  contacts: {
    facebook: string
    website: null,
    vk: string
    twitter: string
    instagram: string
    youtube: null,
    github: string
    mainLink: null
  },
  lookingForAJob: true,
  lookingForAJobDescription: string
  fullName: string
  userId: 2,
  photos: {
    small: string
    large: string
  }
}

export type ProfileReducerType = {
  postsData: PostDataType[]
  newPostText: string
  profile: null | ProfileDataTypes
}

export enum ACTION_TYPE {
  ADD_POST = 'ADD-POST',
  UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT',
  SET_USER_PROFILE = 'SET-USER-PROFILE',
}

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
export const setUserProfile = (profile: ProfileDataTypes) => {
  return {
    type: ACTION_TYPE.SET_USER_PROFILE,
    profile
  } as const
}

export let realTime = `${new Date().getHours()} : ${(new Date().getMinutes() < 10 ? '0' : '') + new Date().getMinutes()}`


let initialState: ProfileReducerType = {
  postsData: [
    {id: 1, name: 'Neo', message: 'Нравится - не нравится, империя развалится.', count: 14515, time: '12:00'},
    {id: 2, name: 'Neo', message: 'Русский военный корабль, иди нахуй!', count: 22563, time: '12:00'}
  ] as PostDataType[],
  newPostText: '',
  profile: null
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
    case ACTION_TYPE.SET_USER_PROFILE: {
      return {...state, profile: action.profile};
    }

    default:
      return state;
  }
}

export const getUserProfile = (userId: string) => {
  return (dispatch: Dispatch) => {

    profileAPI.getProfile(userId)
      .then(data => {
       dispatch(setUserProfile(data));
      });

  }
}