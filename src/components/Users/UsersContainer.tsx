import React from 'react';
import {connect} from 'react-redux';
import {Dispatch} from 'redux';
import {StoreTypeRedux} from "../../Redux/redux-store";
import {
  followAC,
  setCurrentPageAC,
  setTotalUsersCountAC,
  setUsersAC,
  toggleIsFetchingAC,
  unfollowAC,
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
  followButtonHandler: (userId: string) => void
  unfollowButtonHandler: (userId: string) => void
  setUsersButtonHandler: (users: UsersDataType[]) => void
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
        this.props.setUsersButtonHandler(response.data.items);
        this.props.setTotalUsersCount(response.data.totalCount);
      });
  }

  onPageChanged = (pageNumber: number) => {
    this.props.setCurrentPage(pageNumber);
    this.props.toggleIsFetching(true)
    axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`)
      .then(response => {
        this.props.toggleIsFetching(false)
        this.props.setUsersButtonHandler(response.data.items);
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
          followButtonHandler={this.props.followButtonHandler}
          unfollowButtonHandler={this.props.unfollowButtonHandler}
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
const mapDispatchToProps = (dispatch: Dispatch) => {

  return {
    followButtonHandler: (userId: string) => {
      dispatch(followAC(userId))
    },
    unfollowButtonHandler: (userId: string) => {
      dispatch(unfollowAC(userId))
    },
    setUsersButtonHandler: (users: UsersDataType[]) => {
      dispatch(setUsersAC(users))
    },
    setCurrentPage: (pageNumber: number) => {
      dispatch(setCurrentPageAC(pageNumber))
    },
    setTotalUsersCount: (totalCount: number) => {
      dispatch(setTotalUsersCountAC(totalCount))
    },
    toggleIsFetching: (isFetching: boolean) => {
      dispatch(toggleIsFetchingAC(isFetching))
    },
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(UsersContainer);


