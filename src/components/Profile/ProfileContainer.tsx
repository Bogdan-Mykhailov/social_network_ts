import React from "react";
import classes from './Profile.module.css'
import MyPosts from "./MyPosts/MyPosts";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import {ActionsTypes, getUserProfile, ProfileDataTypes, setUserProfile} from "../../Redux/profile-reducer";
import MyPostsContainer from "./MyPosts/MyPostsContainer";
import {StoreTypeRedux} from "../../Redux/redux-store";
import Profile from "./Profile";
import axios from "axios";
import {connect} from "react-redux";
import {UsersDataType} from "../../Redux/users-reducer";
import {Redirect, RouteComponentProps, withRouter} from "react-router-dom";

type ProfilePropsType = MapStateToPropsType & MapDispatchToPropsType
type PropsType = RouteComponentProps<PathPropsType> & ProfilePropsType
type PathPropsType = { userId: string }
type MapStateToPropsType = {
  profile: null | ProfileDataTypes
  isAuth: boolean
}
type MapDispatchToPropsType = { getUserProfile: (userId: string) => void }

class ProfileContainer extends React.Component<PropsType> {

  componentDidMount() {
    let userId = this.props.match.params.userId

    if (!userId) {
      userId = '2';
    }
    this.props.getUserProfile(userId)
  }

  render() {
    if (!this.props.isAuth) return <Redirect to={'/login'}/>
    return (
      <Profile {...this.props} profile={this.props.profile}/>
    )
  }
}

const mapStateToProps = (state: StoreTypeRedux): MapStateToPropsType => {
  return {
    profile: state.profilePage.profile,
    isAuth: state.auth.isAuth
  }
}

let withUrlDataContainerComponent = withRouter(ProfileContainer)

export default connect(mapStateToProps, {getUserProfile})(withUrlDataContainerComponent);
