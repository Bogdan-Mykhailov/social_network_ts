import React, {ChangeEvent, KeyboardEvent} from 'react';
import classes from './ProfileInfo.module.css'
import {updateUserStatus} from "../../../Redux/profile-reducer";
import {log} from "util";

type ProfileStatusPropsType = {
  status: string
  updateUserStatus: (status: string) => void
}

export class ProfileStatus extends React.Component<ProfileStatusPropsType> {

  state = {
    editMode: false,
    status: this.props.status
  }

  activateSpanClickHandler = () => {
    this.setState({
      editMode: true
    })
  }
  deActivateSpanClickHandler = () => {
    this.setState({
      editMode: false
    });
    this.props.updateUserStatus(this.state.status)
  }
  onchangeInputHandler = (e: ChangeEvent<HTMLInputElement>) => {
    this.setState({status: e.currentTarget.value});
  }

  componentDidUpdate(prevProps: Readonly<ProfileStatusPropsType>, prevState: Readonly<{}>) {
    if (prevProps.status !== this.props.status) {
      this.setState({
        status: this.props.status
      });
    }
  }

  render() {
    return (
      <>
        {!this.state.editMode &&
            <div>
                <span onDoubleClick={this.activateSpanClickHandler}>{this.props.status || 'No Status'}</span>
            </div>}
        {this.state.editMode &&
            <div>
                <input
                    onChange={this.onchangeInputHandler}
                    onBlur={this.deActivateSpanClickHandler}
                    autoFocus
                    value={this.state.status}/>
            </div>}

      </>
    );
  }
};