import React from "react";
import classes from './Profile.module.css'
import MyPosts from "./MyPosts/MyPosts";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import {ActionsTypes, ProfileDataTypes, setUserProfile} from "../../Redux/profile-reducer";
import MyPostsContainer from "./MyPosts/MyPostsContainer";
import {StoreTypeRedux} from "../../Redux/redux-store";
import Profile from "./Profile";
import axios from "axios";
import {connect} from "react-redux";
import {UsersDataType} from "../../Redux/users-reducer";
import {RouteComponentProps, withRouter} from "react-router-dom";

type ProfilePropsType = MapStateToPropsType & MapDispatchToPropsType
type PropsType = RouteComponentProps<PathPropsType> & ProfilePropsType
type PathPropsType = {
  userId: string
}
type MapStateToPropsType = {
  profile: null | ProfileDataTypes
}
type MapDispatchToPropsType = {
  setUserProfile: (profile: ProfileDataTypes) => void
}

class ProfileContainer extends React.Component<PropsType> {

  componentDidMount() {
   let userId = this.props.match.params.userId

    if (!userId) {
      userId = '2';
    }
    axios.get(`https://social-network.samuraijs.com/api/1.0/profile/` + userId )
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

const mapStateToProps = (state: StoreTypeRedux): MapStateToPropsType => {
  return {
    profile: state.profilePage.profile
  }
}

let withUrlDataContainerComponent = withRouter(ProfileContainer)

export default connect(mapStateToProps, {setUserProfile})(withUrlDataContainerComponent);
