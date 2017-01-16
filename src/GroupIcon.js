import React, { Component } from 'react';

import { Link } from 'react-router';

class GroupIcon extends Component {
  render() {
    return (
      <div className="group-icon-container">
        <Link className="group-icon" to="/group">
          <i className="fa fa-users"></i>
          <span className="badge">{this.props.group.length}</span>
        </Link>
      </div>
    );
  }
}

export default GroupIcon;
