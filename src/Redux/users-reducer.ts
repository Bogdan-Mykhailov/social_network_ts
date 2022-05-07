import {followUnfollowUserAPI, userAPI} from "../api/api";

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

export enum ACTION_TYPE {
  FOLLOW = 'FOLLOW-USER',
  UNFOLLOW = 'UNFOLLOW-USER',
  SET_USERS = 'SET-USERS',
  SET_CURRENT_PAGE = 'SET-CURRENT-PAGE',
  SET_TOTAL_USERS_COUNT = 'SET-TOTAL-USERS-COUNT',
  IS_FETCHING = 'IS-FETCHING',
  IS_FOLLOWING_PROGRESS = 'IS-FOLLOWING-PROGRESS'
}

let initialState: usersReducerType = {
  users: [] as UsersDataType[],
  pageSize: 16,
  totalUsers: 0,
  currentPage: 1,
  isFetching: true,
  followingInProgres: []
}

export type ActionsTypes =
  followACType |
  unfollowACType |
  setUsersACType |
  setCurrentPageACType |
  setTotalUsersCountACType |
  toggleIsFetchingACType |
  toggleIsFollowingProgressACType

export const usersReducer = (state: usersReducerType = initialState, action: ActionsTypes): usersReducerType => {

  switch (action.type) {
    case ACTION_TYPE.FOLLOW: {
      return {
        ...state,
        users: state.users.map(u => u.id === action.payload.userId ? {...u, followed: true} : u)
      }
    }
    case ACTION_TYPE.UNFOLLOW: {
      return {
        ...state,
        users: state.users.map(u => u.id === action.payload.userId ? {...u, followed: false} : u)
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
    case ACTION_TYPE.IS_FOLLOWING_PROGRESS: {
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

export type followACType = ReturnType<typeof followSuccess>
export const followSuccess = (userId: number) => {
  return {
    type: ACTION_TYPE.FOLLOW,
    payload: {
      userId,
    },
  } as const
}

export type unfollowACType = ReturnType<typeof unfollowSuccess>
export const unfollowSuccess = (userId: number) => {
  return {
    type: ACTION_TYPE.UNFOLLOW,
    payload: {
      userId,
    },
  } as const
}

export type setUsersACType = ReturnType<typeof setUsers>
export const setUsers = (users: UsersDataType[]) => {
  return {
    type: ACTION_TYPE.SET_USERS,
    payload: {
      users,
    },
  } as const
}

export type setCurrentPageACType = ReturnType<typeof setCurrentPage>
export const setCurrentPage = (currentPage: number) => {
  return {
    type: ACTION_TYPE.SET_CURRENT_PAGE,
    payload: {
      currentPage,
    },
  } as const
}

export type setTotalUsersCountACType = ReturnType<typeof setTotalUsersCount>
export const setTotalUsersCount = (totalCount: number) => {
  return {
    type: ACTION_TYPE.SET_TOTAL_USERS_COUNT,
    payload: {
      totalCount,
    },
  } as const
}

export type toggleIsFetchingACType = ReturnType<typeof toggleIsFetching>
export const toggleIsFetching = (isFetching: boolean) => {
  return {
    type: ACTION_TYPE.IS_FETCHING,
    payload: {
      isFetching,
    },
  } as const
}

export type toggleIsFollowingProgressACType = ReturnType<typeof toggleIsFollowingProgress>
export const toggleIsFollowingProgress = (isFetching: boolean, userId: number) => {
  return {
    type: ACTION_TYPE.IS_FOLLOWING_PROGRESS,
    payload: {
      isFetching,
      userId
    },
  } as const
}

export const unfollow = (userId: number) => {
  return (dispatch: any) => {
    dispatch(toggleIsFollowingProgress( true, userId))
    followUnfollowUserAPI.unFollowUser(userId)
      .then(res => {
        if (res.data.resultCode === 0) {
          dispatch(unfollowSuccess(userId));
        }
        dispatch(toggleIsFollowingProgress(false, userId))
      })
  }
}

export const follow = (userId: number) => {
  return (dispatch: any) => {
    dispatch(toggleIsFollowingProgress( true, userId))
    followUnfollowUserAPI.followUser(userId)
      .then(res => {
        if (res.data.resultCode === 0) {
          dispatch(followSuccess(userId));
        }
        dispatch(toggleIsFollowingProgress(false, userId))
      })
  }
}

export const getUsers = (currentPage: number, pageSize: number) => {
  return (dispatch: any) => {
    dispatch(toggleIsFetching(true))
    userAPI.getUsers(currentPage, pageSize).then(data => {
      dispatch(toggleIsFetching(false))
      dispatch(setUsers(data.items))
      dispatch(setCurrentPage(currentPage))
      dispatch(setTotalUsersCount(data.totalCount = 80))
    });
  }
}