import React, { Component } from 'react';
// 1/ Import Avatar
import Avatar from './Avatar';

class Contact extends Component {

  render() {
    return (
      <div className="media">
        <div className="media-body">
          {/* /2 Avatar component */}
          <Avatar
            img_src="https://randomuser.me/api/portraits/med/men/85.jpg" />

          <div classnName="middle">

            <div className="contact-details">
              <h4 className="media-heading">Jerry Jennings</h4>
              <p><i className="fa fa-envelope-o"></i>jennings@gmail.com</p>
              <p><i className="fa fa-phone"></i>(999) 555-6767</p>
            </div>

            <div className="rating">
              <i className="fa fa-star"></i>
              <i className="fa fa-star"></i>
              <i className="fa fa-star"></i>
              <i className="fa fa-star"></i>
              <i className="fa fa-star-o"></i>
            </div>

          </div>

          <div className="group">
            <i className="fa fa-address-card-o"></i>
          </div>
        </div>
      </div>
    );
  }
}

export default Contact;
