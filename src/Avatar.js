// 1/ Import React and React's Component class
import React, { Component } from 'react';

// 1/ Extend React's Component class to create an Avatar class
class Avatar extends Component {
  // 9/ Render some HTML, and use the PROP that's passed down from Contact
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

// 1/ export Avatar for use throughout the app
export default Avatar;
