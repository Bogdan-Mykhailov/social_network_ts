import {AnyAction, Dispatch} from "redux";
import {authAPI, LoginDataType} from "../01-API/auth-API";
import {log} from "util";
import {TypedDispatch} from "./store";

const SET_USER_DATA = 'SET-USER-DATA'
const LOGIN = 'LOGIN'

let initialState: AuthReducerType = {
  id: null,
  email: null,
  login: null,
  isAuth: false,
}

export const authReducer = (state: AuthReducerType = initialState, action: AuthActionsTypes): AuthReducerType => {

  switch (action.type) {
    case SET_USER_DATA: {
      return {
        ...state,
        ...action.payload.data
      }
    }
    // case LOGIN: {
    //   return {...state, isAuth: action.payload.isAuth}
    // }

    default:
      return state;
  }
}

//actions
export const setAuthUserData = (id: number | null, email: string | null, login: string | null, isAuth: boolean) => ({
  type: SET_USER_DATA,
  payload: {data: {id, email, login, isAuth}}
}) as const

// export const loginAC = (isAuth: boolean) => ({type: LOGIN, payload: {isAuth}}) as const

//thunk
export const getAuthUserData = () => (dispatch: Dispatch) => {
  authAPI.authMe()
    .then(data => {
      if (data.resultCode === 0) {
        let {id, login, email} = data.data
        dispatch(setAuthUserData(id, email, login, true))
        // dispatch(loginAC(true))
      }
    })
    // .catch(res => {
    //   if (res.data.resultCode === 1) {
    //     dispatch(loginAC(false))
    //   }
    // })
}

export const logInTC = (data: LoginDataType) => (dispatch: TypedDispatch) => {
  authAPI.logIn(data)
    .then(res => {
      if (res.data.resultCode === 0) {
        dispatch(getAuthUserData())
      }
    })
}
export const logOutTC = () => (dispatch: TypedDispatch) => {
  authAPI.logOut()
    .then(res => {
      if (res.data.resultCode === 0) {
        dispatch(setAuthUserData(null, null, null, false))
      }
    })
}



// export const setLoggedInTC = (data: LoginDataType) => (dispatch: Dispatch) => {
//   authAPI.logIn(data)
//     .then(res => {
//       if (res.data.resultCode === 0) {
//         dispatch(loginAC(true))
//       }
//     })
//
// }

// export const setLoggedOutTC = () => (dispatch: Dispatch) => {
//   authAPI.logOut()
//     .then(res => {
//       if (res.data.resultCode === 0) {
//         dispatch(loginAC(false))
//       }
//     });
// }

//types
export type AuthActionsTypes =
  | ReturnType<typeof setAuthUserData>
  // | ReturnType<typeof loginAC>

export type AuthReducerType = {
  id: null | number,
  email: null | string,
  login: null | string,
  isAuth: boolean,
}