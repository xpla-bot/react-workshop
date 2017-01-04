import React, { Component } from 'react';

class Avatar extends Component {
  render() {
    return (
      <div className="avatar">
        <img className="media-object"
          src={this.props.img_src}
          alt="contact avatar" />
      </div>
    );
  }
}

export default Avatar;
