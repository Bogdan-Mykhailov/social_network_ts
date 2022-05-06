import React from 'react';
import classes from "./Users.module.css";
import userIcon from "../assets/images/userIcon.png";
import {follow, toggleIsFollowingProgress, UsersDataType} from "../../Redux/users-reducer";
import {NavLink} from "react-router-dom";
import axios from 'axios';
import {followUnfollowUserAPI} from "../../api/api";

type UsersTypes = {
  totalUsers: number
  pageSize: number
  currentPage: number
  onPageChanged: (p: number) => void
  users: UsersDataType[]
  follow: (id: string) => void
  unfollow: (id: string) => void
  followingInProgres: string[]
  toggleIsFollowingProgress: (isFetching: boolean, userId: string) => void
}

export const Users = (props: UsersTypes) => {

  let pageCount = Math.ceil(props.totalUsers / props.pageSize);
  const pages = []
  for (let i = 1; i <= pageCount; i++) {
    pages.push(i)
  }

  return (
    <div className={classes.wrapper}>

      {
        props.users.map(u => <div key={u.id} className={classes.userBlock}>
          <span>
            <div>
              <NavLink to={'/profile/' + u.id}>
                <img src={u.photos.small !== null ? u.photos.small : userIcon} className={classes.userAvatar}
                     alt="avatar"/>
              </NavLink>
            </div>
            <div>
             {
               u.isFollow
                 ? <button disabled={props.followingInProgres.some(id=> id === u.id)} onClick={() => {
                   // axios.post(`https://social-network.samuraijs.com/api/1.0/follow/${u.id}`, {}, {
                   //   withCredentials: true,
                   //   headers: {
                   //     "API-KEY": 'a6fd3c52-771e-48f1-889b-ca7971295a84'
                   //   }
                   // })
                 props.toggleIsFollowingProgress( true, u.id)
                   followUnfollowUserAPI.followUser(u)
                     .then(res => {
                       if (res.data.resultCode == 0) {
                         props.follow(u.id);
                       }
                       props.toggleIsFollowingProgress(false, u.id )
                     })

                 }}>Unfollow</button>
                 : <button disabled={props.followingInProgres.some(id=> id === u.id)} onClick={() => {
                   // axios.delete(`https://social-network.samuraijs.com/api/1.0/follow/${u.id}`, {
                   //   withCredentials: true,
                   //   headers: {
                   //     "API-KEY": 'a6fd3c52-771e-48f1-889b-ca7971295a84'
                   //   }
                   // })
                   props.toggleIsFollowingProgress(true, u.id)
                   followUnfollowUserAPI.unFollowUser(u)
                     .then(res => {
                       if (res.data.resultCode == 0) {
                         props.unfollow(u.id)
                       }
                       props.toggleIsFollowingProgress(false, u.id)
                     })
                 }}>Follow</button>
             }
            </div>
          </span>
          <span>
            <span>
              <div>{u.name}</div>
              <div>{u.status}</div>
            </span>
          </span>
        </div>)
      }
      <div className={classes.pagesCount}>
        {pages.map((p, index) => {

          return <span key={index}
                       className={props.currentPage === p ? classes.selectedPage : ''}
                       onClick={(e) => {
                         props.onPageChanged(p)
                       }}>{p}</span>
        })}
      </div>
    </div>
  );
};