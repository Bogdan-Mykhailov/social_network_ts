import {addNewMessageTextAC, updateMessageAC} from "./dialogs-reducer";
import {follow, setCurrentPage, setUsers, unfollow} from "./users-reducer";
import {profileAPI} from "../api/api";
import {Dispatch} from "redux";

const ADD_POST = 'ADD-POST'
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT'
const SET_USER_PROFILE = 'SET-USER-PROFILE'
const SET_USER_STATUS = 'SET-USER-STATUS'

export let realTime = `${new Date().getHours()} : ${(new Date().getMinutes() < 10 ? '0' : '') + new Date().getMinutes()}`

const initialState: ProfileReducerType = {
  postsData: [
    {id: 1, name: 'Neo', message: 'Нравится - не нравится, империя развалится.', count: 14515, time: '12:00'},
    {id: 2, name: 'Neo', message: 'Русский военный корабль, иди нахуй!', count: 22563, time: '12:00'}
  ] as PostDataType[],
  newPostText: '',
  profile: null,
  status: ''
}

export const profileReducer = (state: ProfileReducerType = initialState, action: ActionsTypes): ProfileReducerType => {

  switch (action.type) {
    case ADD_POST: {
      const newPost: PostDataType = {
        id: new Date().getTime(),
        name: 'Neo',
        message: state.newPostText,
        count: 0,
        time: realTime
      };
      return {...state, newPostText: '', postsData: [...state.postsData, newPost]};
    }
    case UPDATE_NEW_POST_TEXT: {
      state.newPostText = action.payload.newText;
      return {...state, newPostText: action.payload.newText};
    }
    case SET_USER_PROFILE: {
      return {...state, profile: action.payload.profile};
    }
    case SET_USER_STATUS: {
      return {...state, status: action.payload.status};
    }

    default:
      return state;
  }
}

//types
export type ActionsTypes =
  | ReturnType<typeof addPostAC>
  | ReturnType<typeof updatePostAC>
  | ReturnType<typeof setUserProfile>
  | ReturnType<typeof setUserStatus>

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
  status: string
}

//actions
export const addPostAC = () => {
  return {
    type: ADD_POST,
  } as const
}
export const updatePostAC = (newText: string) => {
  return {
    type: UPDATE_NEW_POST_TEXT,
    payload: {
      newText
    }
  } as const
}
export const setUserProfile = (profile: ProfileDataTypes) => {
  return {
    type: SET_USER_PROFILE,
    payload: {
      profile
    }
  } as const
}
export const setUserStatus = (status: string) => {
  return {
    type: SET_USER_STATUS,
    payload: {
      status
    }
  } as const
}

//thunk
export const getUserProfile = (userId: string) => (dispatch: Dispatch) => {
  profileAPI.getProfile(userId)
    .then((data) => dispatch(setUserProfile(data)));
}
export const getUserStatus = (userId: string) => (dispatch: Dispatch) => {
  profileAPI.getStatus(userId)
    .then((data) => dispatch(setUserStatus(data)));
}
export const updateUserStatus = (status: string) => (dispatch: Dispatch) => {
  profileAPI.updateStatus(status)
    .then((res) => {
      if (res.data.resultCode === 0) {
        dispatch(setUserStatus(status))
      }
    })
}