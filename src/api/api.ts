import axios from "axios";
import {UsersDataType} from "../Redux/users-reducer";
import {getUserProfile} from "../Redux/profile-reducer";

const instanse = axios.create({
    withCredentials: true,
    headers: {"API-KEY": 'a6fd3c52-771e-48f1-889b-ca7971295a84'},
    baseURL: 'https://social-network.samuraijs.com/api/1.0/'
})

export const userAPI = {
    getUsers(currentPage: number, pageSize: number) {
        return instanse.get(`users?page=${currentPage}&count=${pageSize}`)
            .then((res) => {
               return  res.data
            })
    }
}

export const followUnfollowUserAPI = {
    followUser(userId: number) {
        return instanse.post(`follow/${userId}`)
    },
    unFollowUser(userId: number) {
        return instanse.delete(`follow/${userId}`)
    }
}

export const authAPI = {
    authMe() {
        return instanse.get(`auth/me`)
            .then((res) => {
                return res.data
            })
    }
}

export const profileAPI = {
    getProfile(userId: string) {
        return instanse.get(`profile/${userId}`)
          .then(res => {
              return res.data
          })
    },
    getStatus(userId: string) {
        return instanse.get(`profile/status/${userId}`)
          .then((res) => {
             return  res.data
          })
    },
    updateStatus(status: string) {
      return instanse.put(`profile/status`, {status})
        .then((data) => {
            return data
        })
    },
}