import React, { Component } from 'react';

class GroupIcon extends Component {
  render() {
    return (
      <div className="group-icon-container">
        <div className="group-icon">
          <i className="fa fa-users"></i>
          <span className="badge">{this.props.group.length}</span>
        </div>
      </div>
    );
  }
}

export default GroupIcon;
