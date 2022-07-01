import axios from "axios";

const instanse = axios.create({
  withCredentials: true,
  headers: {"API-KEY": 'a6fd3c52-771e-48f1-889b-ca7971295a84'},
  baseURL: 'https://social-network.samuraijs.com/api/1.0/'
})

export const authAPI = {
  authMe() {
    return instanse.get(`auth/me`)
      .then((res) => {
        return res.data
      })
  },
  logIn(data: LoginDataType) {
    return instanse.post<ResponseType<{ userId: number }>>('auth/login', data)
  },
  logOut() {
    return instanse.delete<ResponseType>('auth/login')
  }
}

export type LoginDataType = {
  email: string
  password: string
  rememberMe?: boolean
  captcha?: string
}

type ResponseType<D = {}> = {
  resultCode: number
  messages: Array<string>
  fieldsErrors: Array<string>
  data: D
}