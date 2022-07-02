import React from "react";
import Header from "./Header";
import {connect} from "react-redux";
import {StoreTypeRedux, useTypedDispatch, useTypedSelector} from "../../02-BLL/store";
import {getAuthUserData, logOutTC} from "../../02-BLL/auth-reducer";
import {Redirect} from "react-router-dom";

export type HeaderPropsType = MapStateToPropsType & MapDispatchToProps

type MapStateToPropsType = {
  login: null | string
  isAuth: boolean
}

export type MapDispatchToProps = {
  getAuthUserData: () => void
  logOutTC: () => void
}

class HeaderContainer extends React.Component<HeaderPropsType> {

  componentDidMount() {
    this.props.getAuthUserData()
  }

  render() {
    return <Header {...this.props}/>
  }
}

const mapStateToProps = (state: StoreTypeRedux): MapStateToPropsType => {
  return {
    login: state.auth.login,
    isAuth: state.auth.isAuth
  }
}

export default connect(mapStateToProps, {getAuthUserData, logOutTC})(HeaderContainer)