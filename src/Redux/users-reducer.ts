import {v1} from "uuid";
import {ActionsTypes} from "./profile-reducer";
import {ReactJSXElement} from "@emotion/react/types/jsx-namespace";

export type UsersDataType = {
  id: string
  name: string
  status: string
  photos: {
    small: string
    large: string
  }
  location: {
    country: string
    city: string
  }
  isFollow: boolean
}
export type usersReducerType = {
  users: UsersDataType[]
}

export enum ACTION_TYPE {
  FOLLOW = 'FOLLOW-USER',
  UNFOLLOW = 'UNFOLLOW-USER',
  SET_USERS = 'SET-USERS',
}


export const followAC = (userId: string) => {
  return {
    type: ACTION_TYPE.FOLLOW,
    payload: {
      userId,
    },
  } as const
}
export const unfollowAC = (userId: string) => {
  return {
    type: ACTION_TYPE.UNFOLLOW,
    payload: {
      userId,
    },
  } as const
}
export const setUsersAC = (users: UsersDataType[]) => {
  return {
    type: ACTION_TYPE.SET_USERS,
    payload: {
      users,
    },
  } as const
}
let initialState: usersReducerType = {
  users: [ ] as UsersDataType[],
}

export const usersReducer = (state: usersReducerType = initialState, action: ActionsTypes): usersReducerType => {

  switch (action.type) {

    case ACTION_TYPE.FOLLOW: {
      return {
        ...state,
        users: state.users.map(u => u.id === action.payload.userId ? {...u, isFollow: false} : u)
      }
    }

    case ACTION_TYPE.UNFOLLOW: {
      return {
        ...state,
        users: state.users.map(u => u.id === action.payload.userId ? {...u, isFollow: true} : u)
      }

    }
    case ACTION_TYPE.SET_USERS: {
      return {
        ...state, users: [...state.users, ...action.payload.users]
      }
    }

    default:
      return state;
  }
}