import React from 'react';
import {connect} from 'react-redux';
import {Dispatch} from 'redux';
import {StoreTypeRedux} from "../../Redux/redux-store";
import {
  follow,
  setCurrentPage,
  setTotalUsersCount,
  setUsers,
  toggleIsFetching, toggleIsFollowingProgress,
  unfollow,
  UsersDataType,
  usersReducerType
} from "../../Redux/users-reducer";
import axios from "axios";
import {Users} from "./Users";
import inProgress from './assets/inProgress.svg'
import {Preloader} from "../Common/Preloader/Preloader";
import {userAPI} from "../../api/api";

export type UsersPropsType = mapStateToPropsType & mapDispatchToPropsType

type mapStateToPropsType = {
  users: UsersDataType[],
  pageSize: number,
  totalUsers: number,
  currentPage: number,
  isFetching: boolean,
  followingInProgres: Number[]
}
type mapDispatchToPropsType = {
  follow: (userId: number) => void
  unfollow: (userId: number) => void
  setUsers: (users: UsersDataType[]) => void
  setCurrentPage: (pageNumber: number) => void
  setTotalUsersCount: (totalCount: number) => void
  toggleIsFetching: (isFetching: boolean) => void
  toggleIsFollowingProgress: (isFetching: boolean, userId: number) => void
}

export class UsersContainer extends React.Component<UsersPropsType> {
  componentDidMount() {
    this.props.toggleIsFetching(true)

    userAPI.getUsers(this.props.currentPage, this.props.pageSize).then(data => {
      this.props.toggleIsFetching(false)
      this.props.setUsers(data.items);
      this.props.setTotalUsersCount(data.totalCount = 80);
    });
  }

  onPageChanged = (pageNumber: number) => {
    this.props.setCurrentPage(pageNumber);
    this.props.toggleIsFetching(true)

    userAPI.getUsers(pageNumber, this.props.pageSize).then(data => {
        this.props.toggleIsFetching(false)
        this.props.setUsers(data.items);
      });
  }

  render() {

    return (
      <>
        {this.props.isFetching ? <Preloader/> : null}
        <Users
          totalUsers={this.props.totalUsers}
          pageSize={this.props.pageSize}
          currentPage={this.props.currentPage}
          onPageChanged={this.onPageChanged}
          users={this.props.users}
          follow={this.props.follow}
          unfollow={this.props.unfollow}
          followingInProgres={this.props.followingInProgres}
          toggleIsFollowingProgress={this.props.toggleIsFollowingProgress}
        />
      </>
    );
  }
}

const mapStateToProps = (state: StoreTypeRedux): mapStateToPropsType => {
  return {
    users: state.usersPage.users,
    pageSize: state.usersPage.pageSize,
    totalUsers: state.usersPage.totalUsers,
    currentPage: state.usersPage.currentPage,
    isFetching: state.usersPage.isFetching,
    followingInProgres: state.usersPage.followingInProgres
  }
};

export default connect(mapStateToProps, {
  follow,
  unfollow,
  setUsers,
  setCurrentPage,
  setTotalUsersCount,
  toggleIsFetching,
  toggleIsFollowingProgress
})(UsersContainer);


