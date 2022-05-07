import React, {ComponentType} from 'react';
import {Redirect} from "react-router-dom";
import {connect} from "react-redux";
import {StoreTypeRedux} from "../Redux/redux-store";

export type MapStateToPropsType = {
  isAuth: boolean
}

export function WithAuthRedirect<T>(Component: ComponentType<T>) {

  const RedirectComponent = (props: MapStateToPropsType) => {
    let {isAuth, ...restProps} = props
    if (!isAuth) return <Redirect to={'/login'}/>

    return <Component {...restProps as T}/>

  }

  const mapStateToProps = (state: StoreTypeRedux): MapStateToPropsType => {
    return {
      isAuth: state.auth.isAuth
    }
  }

  let ConnectedRedirectComponent = connect(mapStateToProps)(RedirectComponent)

  return ConnectedRedirectComponent
}