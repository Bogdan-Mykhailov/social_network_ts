export type AuthReducerType = {
  id: null | number,
  email: null | string,
  login: null | string,
  isAuth: boolean
  // fieldsErrors: []
  // messages: []
  // resultCode: 0
  // isFetching: boolean
}

export enum ACTION_TYPE {
  SET_USER_DATA = 'SET-USER-DATA',
}

let initialState: AuthReducerType = {
  id: null,
  email: null,
  login: null,
  isAuth: false
  // isFetching: false,
}

export type ActionsTypes = setAuthUserDataType

export const authReducer = (state: AuthReducerType = initialState, action: ActionsTypes): AuthReducerType => {

  switch (action.type) {
    case ACTION_TYPE.SET_USER_DATA: {
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

export type setAuthUserDataType = ReturnType<typeof setAuthUserData>
export const setAuthUserData = (id: number, email: string, login: string) => {
  return {
    type: ACTION_TYPE.SET_USER_DATA,
    payload: {
      data: {
        id,
        email,
        login

      }
    },
  } as const
}