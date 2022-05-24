import React from 'react';
import classes from './ProfileInfo.module.css'

type ProfileStatusPropsType = {
  status: string
}

export class ProfileStatus extends React.Component<ProfileStatusPropsType> {
  state = {
    editMode: false
  }

  activateSpanClickHandler = () => {
    this.setState({
      editMode: true
    })
  }
  deActivateSpanClickHandler = () => {
    this.setState({
      editMode: false
    })
  }

  render() {
    return (
      <>
        {!this.state.editMode &&
            <div>
                <span onDoubleClick={this.activateSpanClickHandler}>{this.props.status}</span>
            </div>}
        {this.state.editMode &&
            <div>
                <input onBlur={this.deActivateSpanClickHandler} autoFocus value={this.props.status}/>
            </div>}

      </>
    );
  }
};