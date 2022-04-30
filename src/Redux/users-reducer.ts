import {v1} from "uuid";
import {addPostAC, updatePostAC} from "./profile-reducer";
import {ReactJSXElement} from "@emotion/react/types/jsx-namespace";
import {addNewMessageTextAC, updateMessageAC} from "./dialogs-reducer";

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
  users: UsersDataType[],
  pageSize: number,
  totalUsers: number,
  currentPage: number,
  isFetching: boolean
}

export enum ACTION_TYPE {
  FOLLOW = 'FOLLOW-USER',
  UNFOLLOW = 'UNFOLLOW-USER',
  SET_USERS = 'SET-USERS',
  SET_CURRENT_PAGE = 'SET-CURRENT-PAGE',
  SET_TOTAL_USERS_COUNT = 'SET-TOTAL-USERS-COUNT',
  IS_FETCHING = 'IS-FETCHING'
}

let initialState: usersReducerType = {
  users: [] as UsersDataType[],
  pageSize: 6,
  totalUsers: 0,
  currentPage: 1,
  isFetching: false,
}

export type ActionsTypes =
  followACType |
  unfollowACType |
  setUsersACType |
  setCurrentPageACType |
  setTotalUsersCountACType |
  toggleIsFetchingACType

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
        ...state, users: action.payload.users
      }
    }
    case ACTION_TYPE.SET_CURRENT_PAGE: {
      return {
        ...state, currentPage: action.payload.currentPage
      }
    }
    case ACTION_TYPE.SET_TOTAL_USERS_COUNT: {
      return {
        ...state, totalUsers: action.payload.totalCount
      }
    }
    case ACTION_TYPE.IS_FETCHING: {
      return {
        ...state, isFetching: action.payload.isFetching
      }
    }

    default:
      return state;
  }
}

export type followACType = ReturnType<typeof setUsersAC>
export const followAC = (userId: string) => {
  return {
    type: ACTION_TYPE.FOLLOW,
    payload: {
      userId,
    },
  } as const
}

export type unfollowACType = ReturnType<typeof unfollowAC>
export const unfollowAC = (userId: string) => {
  return {
    type: ACTION_TYPE.UNFOLLOW,
    payload: {
      userId,
    },
  } as const
}

export type setUsersACType = ReturnType<typeof followAC>
export const setUsersAC = (users: UsersDataType[]) => {
  return {
    type: ACTION_TYPE.SET_USERS,
    payload: {
      users,
    },
  } as const
}

export type setCurrentPageACType = ReturnType<typeof setCurrentPageAC>
export const setCurrentPageAC = (currentPage: number) => {
  return {
    type: ACTION_TYPE.SET_CURRENT_PAGE,
    payload: {
      currentPage,
    },
  } as const
}

export type setTotalUsersCountACType = ReturnType<typeof setTotalUsersCountAC>
export const setTotalUsersCountAC = (totalCount: number) => {
  return {
    type: ACTION_TYPE.SET_TOTAL_USERS_COUNT,
    payload: {
      totalCount,
    },
  } as const
}

export type toggleIsFetchingACType = ReturnType<typeof toggleIsFetchingAC>
export const toggleIsFetchingAC = (isFetching: boolean) => {
  return {
    type: ACTION_TYPE.IS_FETCHING,
    payload: {
      isFetching,
    },
  } as const
}