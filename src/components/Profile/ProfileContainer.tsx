import React from "react";
import classes from './Profile.module.css'
import MyPosts from "./MyPosts/MyPosts";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import {ActionsTypes, setUserProfile} from "../../Redux/profile-reducer";
import MyPostsContainer from "./MyPosts/MyPostsContainer";
import {StoreTypeRedux} from "../../Redux/redux-store";
import Profile from "./Profile";
import axios from "axios";
import {connect} from "react-redux";
import {UsersDataType} from "../../Redux/users-reducer";

type ProfilePropsType = MapStateToPropsType & MapDispatchToPropsType

type MapStateToPropsType = {
  profile: UsersDataType
}

type MapDispatchToPropsType = {
  setUserProfile: (profile: UsersDataType) => void
}

class ProfileContainer extends React.Component<ProfilePropsType> {

  componentDidMount() {
    axios.get(`https://social-network.samuraijs.com/api/1.0/profile/2`)
      .then(response => {
        this.props.setUserProfile(response.data);
      });
  }

  render() {

    return (
      <Profile profile={this.props.profile}/>
    )
  }
}

const mapStateToProps = (state: StoreTypeRedux) => {
  return {
    profile: state.profilePage.profile
  }
}


// @ts-ignore
export default connect(mapStateToProps, {setUserProfile})(ProfileContainer);
