import React from 'react';
import {UsersPropsType} from "./UsersContainer";
import classes from './Users.module.css'
import {v1} from "uuid";
import axios from 'axios';
import userIcon from '../assets/images/userIcon.png'

export class Users extends React.Component<UsersPropsType> {

  componentDidMount() {
    axios.get('https://social-network.samuraijs.com/api/1.0/users').then(response => {
      this.props.setUsersButtonHandler(response.data.items)
    });
  }

  render() {
    return (
      <div>
        {
          this.props.users.map(u => <div key={u.id}>
          <span>
            <div>
              <img src={u.photos.small !== null ? u.photos.small : userIcon} className={classes.userAvatar}
                   alt="avatar"/>
            </div>
            <div>
             {
               u.isFollow
                 ? <button onClick={() => {this.props.followButtonHandler(u.id)}}>Unfollow</button>
                 : <button onClick={() => {this.props.unfollowButtonHandler(u.id)}}>Follow</button>
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
  }
}

export default Users