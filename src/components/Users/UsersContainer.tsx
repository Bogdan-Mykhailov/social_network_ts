import React from 'react';
import {connect} from 'react-redux';
import {compose, Dispatch} from 'redux';
import {StoreTypeRedux} from "../../Redux/redux-store";
import {
  follow,
  getUsers,
  setCurrentPage,
  setTotalUsersCount,
  setUsers,
  toggleIsFetching,
  unfollow,
  UsersDataType,
  usersReducerType
} from "../../Redux/users-reducer";
import axios from "axios";
import {Users} from "./Users";
import inProgress from './assets/inProgress.svg'
import {Preloader} from "../Common/Preloader/Preloader";
import {WithAuthRedirect} from "../../hoc/WithAuthRedirect";

export type UsersPropsType = mapStateToPropsType & mapDispatchToPropsType

type mapStateToPropsType = {
  users: UsersDataType[],
  pageSize: number,
  totalUsers: number,
  currentPage: number,
  isFetching: boolean,
  followingInProgres: Number[],
}
type mapDispatchToPropsType = {
  follow: (userId: number) => void
  unfollow: (userId: number) => void
  setCurrentPage: (pageNumber: number) => void
  getUsers: (currentPage: number, pageSize: number) => void
}

export class UsersContainer extends React.Component<UsersPropsType> {
  componentDidMount() {
    this.props.getUsers(this.props.currentPage, this.props.pageSize)
  }

  onPageChanged = (pageNumber: number) => {
    this.props.getUsers(pageNumber, this.props.pageSize)
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

export default compose<React.ComponentType>(connect(mapStateToProps, {follow, unfollow, setCurrentPage, getUsers}), WithAuthRedirect)(UsersContainer)


