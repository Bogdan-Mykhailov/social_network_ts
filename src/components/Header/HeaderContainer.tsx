import React from "react";
import Header from "./Header";
import {connect} from "react-redux";
import {StoreTypeRedux} from "../../Redux/redux-store";
import {getAuthUserData} from "../../Redux/auth-reducer";
import {log} from "util";

export type HeaderPropsType = MapStateToPropsType & MapDispatchToProps

type MapStateToPropsType = {
  login: null | string
  isAuth: boolean
}

export type MapDispatchToProps = {
  getAuthUserData: () => void
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

export default connect(mapStateToProps, {getAuthUserData})(HeaderContainer)