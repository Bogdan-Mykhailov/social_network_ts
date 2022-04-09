import React from 'react';
import {connect} from 'react-redux';
import {Dispatch} from 'redux';
import Users from "./Users";
import {StoreTypeRedux} from "../../Redux/redux-store";
import {followAC, setUsersAC, unfollowAC, UsersDataType, usersReducerType} from "../../Redux/users-reducer";

export type UsersPropsType = mapStateToPropsType & mapDispatchToPropsType
type mapStateToPropsType = {
  users: UsersDataType[]
}
type mapDispatchToPropsType = {
  followButtonHandler: (userId: string) => void
  unfollowButtonHandler: (userId: string) => void
  setUsersButtonHandler: (users: UsersDataType[]) => void
}

const mapStateToProps = (state: StoreTypeRedux): mapStateToPropsType => {
  return {
    users: state.usersPage.users
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
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Users);


