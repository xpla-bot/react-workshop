import React, { Component } from 'react';
import Avatar from './Avatar';
// /1 Import the ContactInfo component
import ContactInfo from './ContactInfo';

class Contact extends Component {

  render() {
    return (
      <div className="media">
        <div className="media-body">
          <Avatar
            img_src="https://randomuser.me/api/portraits/med/men/85.jpg" />

          <div classnName="middle">
            {/* 4/ Use the ContactInfo component and pass it props */}
            <ContactInfo
              contactName="Jerry Jennings"
              email="jennings@gmail.com"
              phone="(999) 555-6767"/>

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
