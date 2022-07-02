import {addNewMessageTextAC} from "./dialogs-reducer";
import {follow, setCurrentPage, setUsers, unfollow} from "./users-reducer";
import {Dispatch} from "redux";
import {profileAPI} from "../01-API/profile-API";

const ADD_POST = 'ADD-POST'
const SET_USER_PROFILE = 'SET-USER-PROFILE'
const SET_USER_STATUS = 'SET-USER-STATUS'

export let realTime = `${new Date().getHours()} : ${(new Date().getMinutes() < 10 ? '0' : '') + new Date().getMinutes()}`

const initialState: ProfileReducerType = {
  postsData: [
    {id: 1, name: 'Neo', message: 'Нравится - не нравится, империя развалится.', count: 14515, time: '12:00'},
    {id: 2, name: 'Neo', message: 'Русский военный корабль, иди нахуй!', count: 22563, time: '12:00'}
  ] as PostDataType[],
  profile: null,
  status: ''
}

export const profileReducer = (state: ProfileReducerType = initialState, action: ProfileActionsTypes): ProfileReducerType => {

  switch (action.type) {
    case ADD_POST: {
      const newPost: PostDataType = {
        id: new Date().getTime(),
        name: 'Neo',
        message: action.payload.post,
        count: 0,
        time: realTime
      };
      return {...state, postsData: [...state.postsData, newPost]};
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

//actions
export const addPostAC = (post: string) => {
  return {
    type: ADD_POST,
    payload: {
      post
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
    .then((data) => {
      dispatch(setUserProfile(data))
    });
}
export const getUserStatus = (userId: string) => (dispatch: Dispatch) => {
  profileAPI.getStatus(userId)
    .then((data) => {
      dispatch(setUserStatus(data))
    });
}
export const updateUserStatus = (status: string) => (dispatch: Dispatch) => {
  profileAPI.updateStatus(status)
    .then((res) => {
      if (res.data.resultCode === 0) {
        dispatch(setUserStatus(status))
      }
    })
}

//types
export type ProfileActionsTypes =
  | ReturnType<typeof addPostAC>
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
  profile: null | ProfileDataTypes
  status: string
}
