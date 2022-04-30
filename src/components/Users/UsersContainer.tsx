import React from 'react';
import {connect} from 'react-redux';
import {Dispatch} from 'redux';
import {StoreTypeRedux} from "../../Redux/redux-store";
import {
  follow,
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

export type UsersPropsType = mapStateToPropsType & mapDispatchToPropsType
type mapStateToPropsType = {
  users: UsersDataType[],
  pageSize: number,
  totalUsers: number,
  currentPage: number,
  isFetching: boolean,
}
type mapDispatchToPropsType = {
  follow: (userId: string) => void
  unfollow: (userId: string) => void
  setUsers: (users: UsersDataType[]) => void
  setCurrentPage: (pageNumber: number) => void
  setTotalUsersCount: (totalCount: number) => void
  toggleIsFetching: (isFetching: boolean) => void
}

export class UsersContainer extends React.Component<UsersPropsType> {
  componentDidMount() {
    this.props.toggleIsFetching(true)
    axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`)
      .then(response => {
        this.props.toggleIsFetching(false)
        this.props.setUsers(response.data.items);
        this.props.setTotalUsersCount(response.data.totalCount);
      });
  }

  onPageChanged = (pageNumber: number) => {
    this.props.setCurrentPage(pageNumber);
    this.props.toggleIsFetching(true)
    axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`)
      .then(response => {
        this.props.toggleIsFetching(false)
        this.props.setUsers(response.data.items);
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
    isFetching: state.usersPage.isFetching
  }
}

export default connect(mapStateToProps, {
  follow: follow,
  unfollow: unfollow,
  setUsers: setUsers,
  setCurrentPage: setCurrentPage,
  setTotalUsersCount: setTotalUsersCount,
  toggleIsFetching: toggleIsFetching
})(UsersContainer);


