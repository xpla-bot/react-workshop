import React, { Component } from 'react';

class Contact extends Component {

  render() {
    return (
      <div className="media">
        <div className="media-body">
          {/* /5 Avatar component */}
          <div className="avatar">
            <img className="media-object"
              src="https://randomuser.me/api/portraits/med/men/85.jpg"
              alt="contact avatar" />
          </div>
          <div classnName="middle">

            {/* /5 ContactInfo component */}
            <div className="contact-details">
              <h4 className="media-heading">Jerry Jennings</h4>
              <p><i className="fa fa-envelope-o"></i>jennings@gmail.com</p>
              <p><i className="fa fa-phone"></i>(999) 555-6767</p>
            </div>

            {/* /7 Rating component */}
            <div className="rating">
              <i className="fa fa-star"></i>
              <i className="fa fa-star"></i>
              <i className="fa fa-star"></i>
              <i className="fa fa-star"></i>
              <i className="fa fa-star-o"></i>
            </div>

          </div>

          {/* /3 This code will remain part of the Contact component*/}
          <div className="group">
            <i className="fa fa-address-card-o"></i>
          </div>
        </div>
      </div>
    );
  }
}

export default Contact;
