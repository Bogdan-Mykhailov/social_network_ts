import {authAPI} from "../api/api";
import {Dispatch} from "redux";

const SET_USER_DATA = 'SET-USER-DATA'

let initialState: AuthReducerType = {
  id: null,
  email: null,
  login: null,
  isAuth: false
}


export const authReducer = (state: AuthReducerType = initialState, action: ActionsTypes): AuthReducerType => {

  switch (action.type) {
    case SET_USER_DATA: {
      return {
        ...state,
        ...action.payload.data,
        isAuth: true
      }
    }

    default:
      return state;
  }
}

//types

export type ActionsTypes =
  | ReturnType<typeof setAuthUserData>

export type AuthReducerType = {
  id: null | number,
  email: null | string,
  login: null | string,
  isAuth: boolean
}

//actions
export const setAuthUserData = (id: number, email: string, login: string) => {
  return {
    type: SET_USER_DATA,
    payload: {
      data: {
        id,
        email,
        login

      }
    },
  } as const
}

//thunk

export const getAuthUserData = () => (dispatch: Dispatch) => {
  authAPI.authMe()
    .then(data => {
      if (data.resultCode == 0) {
        let {id, login, email} = data.data
        dispatch(setAuthUserData(id, email, login))
      }
    });
}