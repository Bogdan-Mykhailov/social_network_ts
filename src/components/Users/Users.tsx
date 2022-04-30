import React from 'react';
import classes from "./Users.module.css";
import userIcon from "../assets/images/userIcon.png";
import {follow, UsersDataType} from "../../Redux/users-reducer";

type UsersPropsTypes = {
  totalUsers: number
  pageSize: number
  currentPage: number
  onPageChanged: (p: number) => void
  users: UsersDataType[]
  follow: (id: string) => void
  unfollow: (id: string) => void
}

export const Users = (props: UsersPropsTypes) => {

  let pageCount = Math.ceil(props.totalUsers / props.pageSize);
  const pages = []
  for (let i = 1; i <= pageCount; i++) {
    pages.push(i)
  }

  return (
    <div>
      <div>
        {pages.map((p, index) => {

          return <span key={index}
                       className={props.currentPage === p ? classes.selectedPage : ''}
                       onClick={(e) => {
                         props.onPageChanged(p)
                       }}>{p}</span>
        })}
      </div>
      {
        props.users.map(u => <div key={u.id}>
          <span>
            <div>
              <img src={u.photos.small !== null ? u.photos.small : userIcon} className={classes.userAvatar}
                   alt="avatar"/>
            </div>
            <div>
             {
               u.isFollow
                 ? <button onClick={() => {
                   props.follow(u.id)
                 }}>Unfollow</button>
                 : <button onClick={() => {
                   props.unfollow(u.id)
                 }}>Follow</button>
             }
            </div>
          </span>
          <span>
            <span>
              <div>{u.name}</div>
              <div>{u.status}</div>
            </span>
            <span>
              <div>{'u.location.country'}</div>
              <div>{'u.location.city'}</div>
            </span>
          </span>
        </div>)
      }
    </div>
  );
};