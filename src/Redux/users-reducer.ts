import { v1 } from "uuid";
import {ActionsTypes} from "./profile-reducer";

export type UsersDataType = {
  id: string
  fulName: string
  status: string
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
export const setUsersAC = (users: UsersDataType) => {
  return {
    type: ACTION_TYPE.SET_USERS,
    payload: {
      users,
    },
  } as const
}


let initialState: usersReducerType = {
  users: [
    {id: v1(), isFollow: true, fulName: 'Stepan Bandera', status: 'Put a few Muscovites on a bottle', location: {city: 'Lviv', country: 'Ukraine'}},
    {id: v1(), isFollow: false, fulName: 'Pikachu', status: 'Send all russian home from EU', location: {city: 'Vinnitsia', country: 'Ukraine'}},
    {id: v1(), isFollow: true, fulName: 'Taras Shevchenco', status: 'Fight and fight', location: {city: 'Moryntci', country: 'Ukraine'}},
    {id: v1(), isFollow: false, fulName: 'Romelu Lukaku', status: 'Putler KAPUT', location: {city: 'Antwerp', country: 'Belgium'}},
  ],
}

export const usersReducer = (state: usersReducerType = initialState, action: ActionsTypes): usersReducerType => {

  switch (action.type) {

    case ACTION_TYPE.FOLLOW: {
      return {
        ...state,
        users: state.users.map(u => u.id === action.payload.userId ? {...u, isFollow: true} : u)
      }
    }

    case ACTION_TYPE.UNFOLLOW: {
      return {
        ...state,
        users: state.users.map(u => u.id === action.payload.userId ? {...u, isFollow: false} : u)
      }

    }case ACTION_TYPE.SET_USERS: {
      return {
      ...state, users: [...state.users, action.payload.users]
      }
    }

    default:
      return state;
  }
}