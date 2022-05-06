import axios from "axios";
import {UsersDataType} from "../Redux/users-reducer";

const instanse = axios.create({
    withCredentials: true,
    headers: {"API-KEY": 'a6fd3c52-771e-48f1-889b-ca7971295a84'},
    baseURL: 'https://social-network.samuraijs.com/api/1.0/'
})

export const userAPI = {
    getUsers(currentPage, pageSize) {
        return instanse.get(`users?page=${currentPage}&count=${pageSize}`)
            .then(res => {
                return res.data
            })
    }
}

export const followUnfollowUserAPI = {
    followUser(u) {
        return instanse.post(`follow/${u.id}`, {})
    },
    unFollowUser(u) {
        return instanse.delete(`follow/${u.id}`)
    }
}

export const authAPI = {
    authMe() {
        return instanse.get(`auth/me`)
            .then(res => {
                return res.data
            })
    }
}