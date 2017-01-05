import React, { Component } from 'react';
import Avatar from './Avatar';
import ContactInfo from './ContactInfo';
import Rating from './Rating';

class Contact extends Component {

  render() {
    return (
      <div className="media">
        <div className="media-body">
          <Avatar
            img_src="https://randomuser.me/api/portraits/med/men/85.jpg" />

          <div classnName="middle">

            <ContactInfo
              contactName="Jerry Jennings"
              email="jennings@gmail.com"
              phone="(999) 555-6767"/>

            <Rating />

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
