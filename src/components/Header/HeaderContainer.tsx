import React from "react";
import Header from "./Header";
import axios from "axios";
import {connect} from "react-redux";
import {StoreTypeRedux} from "../../Redux/redux-store";
import {AuthReducerType, setAuthUserData} from "../../Redux/auth-reducer";
import {authAPI} from "../../api/api";

export type HeaderPropsType = MapStateToPropsType & MapDispatchToProps

type MapStateToPropsType = {
  login: null | string
  isAuth: boolean
}

type MapDispatchToProps = {
  setAuthUserData: (
    id: number,
    email: string,
    login: string) => void
}

class HeaderContainer extends React.Component<HeaderPropsType> {

  componentDidMount() {
    // axios.get(`https://social-network.samuraijs.com/api/1.0/auth/me`, {withCredentials: true})
    authAPI.authMe()
      .then(data => {
        if (data.resultCode == 0) {
          let {id, login, email} = data.data
          this.props.setAuthUserData(id, email, login)
        }
      });
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

export default connect(mapStateToProps, {setAuthUserData})(HeaderContainer)