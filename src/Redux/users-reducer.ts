import {followUnfollowUserAPI, userAPI} from "../api/api";
import {Dispatch} from "redux";

const FOLLOW = 'FOLLOW-USER'
const UNFOLLOW = 'UNFOLLOW-USER'
const SET_USERS = 'SET-USERS'
const SET_CURRENT_PAGE = 'SET-CURRENT-PAGE'
const SET_TOTAL_USERS_COUNT = 'SET-TOTAL-USERS-COUNT'
const IS_FETCHING = 'IS-FETCHING'
const IS_FOLLOWING_PROGRESS = 'IS-FOLLOWING-PROGRESS'

let initialState: usersReducerType = {
  users: [] as UsersDataType[],
  pageSize: 20,
  totalUsers: 0,
  currentPage: 1,
  isFetching: true,
  followingInProgres: []
}

export const usersReducer = (state: usersReducerType = initialState, action: ActionsTypes): usersReducerType => {

  switch (action.type) {
    case FOLLOW: {
      return {
        ...state,
        users: state.users.map(u => u.id === action.payload.userId ? {...u, followed: true} : u)
      }
    }
    case UNFOLLOW: {
      return {
        ...state,
        users: state.users.map(u => u.id === action.payload.userId ? {...u, followed: false} : u)
      }

    }
    case SET_USERS: {
      return {
        ...state, users: action.payload.users
      }
    }
    case SET_CURRENT_PAGE: {
      return {
        ...state, currentPage: action.payload.currentPage
      }
    }
    case SET_TOTAL_USERS_COUNT: {
      return {
        ...state, totalUsers: action.payload.totalCount
      }
    }
    case IS_FETCHING: {
      return {
        ...state, isFetching: action.payload.isFetching
      }
    }
    case IS_FOLLOWING_PROGRESS: {
      return {
        ...state,
        followingInProgres: action.payload.isFetching
          ? [...state.followingInProgres, action.payload.userId]
          : state.followingInProgres.filter(id => id != action.payload.userId)
      }
    }

    default:
      return state;
  }
}

//types
export type ActionsTypes =
  | ReturnType<typeof followSuccess>
  | ReturnType<typeof unfollowSuccess>
  | ReturnType<typeof setUsers>
  | ReturnType<typeof setCurrentPage>
  | ReturnType<typeof setTotalUsersCount>
  | ReturnType<typeof toggleIsFetching>
  | ReturnType<typeof toggleIsFollowingProgress>

export type UsersDataType = {
  id: number
  name: string
  status: string
  photos: {
    small: string
    large: string
  }
  followed: boolean
}
export type usersReducerType = {
  users: UsersDataType[],
  pageSize: number,
  totalUsers: number,
  currentPage: number,
  isFetching: boolean,
  followingInProgres: Number[]
}

//actions
export const followSuccess = (userId: number) => {
  return {
    type: FOLLOW,
    payload: {
      userId,
    },
  } as const
}
export const unfollowSuccess = (userId: number) => {
  return {
    type: UNFOLLOW,
    payload: {
      userId,
    },
  } as const
}
export const setUsers = (users: UsersDataType[]) => {
  return {
    type: SET_USERS,
    payload: {
      users,
    },
  } as const
}
export const setCurrentPage = (currentPage: number) => {
  return {
    type: SET_CURRENT_PAGE,
    payload: {
      currentPage,
    },
  } as const
}
export const setTotalUsersCount = (totalCount: number) => {
  return {
    type: SET_TOTAL_USERS_COUNT,
    payload: {
      totalCount,
    },
  } as const
}
export const toggleIsFetching = (isFetching: boolean) => {
  return {
    type: IS_FETCHING,
    payload: {
      isFetching,
    },
  } as const
}
export const toggleIsFollowingProgress = (isFetching: boolean, userId: number) => {
  return {
    type: IS_FOLLOWING_PROGRESS,
    payload: {
      isFetching,
      userId
    },
  } as const
}

//thunk
export const unfollow = (userId: number) => (dispatch: Dispatch) => {
  dispatch(toggleIsFollowingProgress(true, userId))
  followUnfollowUserAPI.unFollowUser(userId)
    .then(res => {
      if (res.data.resultCode === 0) {
        dispatch(unfollowSuccess(userId));
      }
      dispatch(toggleIsFollowingProgress(false, userId))
    })
}
export const follow = (userId: number) => (dispatch: Dispatch) => {
  dispatch(toggleIsFollowingProgress(true, userId))
  followUnfollowUserAPI.followUser(userId)
    .then(res => {
      if (res.data.resultCode === 0) {
        dispatch(followSuccess(userId));
      }
      dispatch(toggleIsFollowingProgress(false, userId))
    })
}
export const getUsers = (currentPage: number, pageSize: number) => (dispatch: Dispatch) => {
  dispatch(toggleIsFetching(true))
  userAPI.getUsers(currentPage, pageSize).then(data => {
    dispatch(toggleIsFetching(false))
    dispatch(setUsers(data.items))
    dispatch(setCurrentPage(currentPage))
    dispatch(setTotalUsersCount(data.totalCount = 80))
  });
}
