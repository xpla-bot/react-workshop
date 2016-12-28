import React, { Component } from 'react';

// 1/ Create a Contact component
class Contact extends Component {
  // Render some html (media object) from the Bootstrap website
  render() {
    // Change 'class' to 'className' & add a closing slash to <img>
    return (
      <div className="media">
        <div className="media-left">
          <a href="#">
            <img className="media-object"
              src="https://randomuser.me/api/portraits/med/men/85.jpg" alt="contact avatar" />
          </a>
        </div>
        <div className="media-body">

          <h4 className="media-heading">Jerry Jennings</h4>
          <p><i className="fa fa-envelope-o"></i>jennings@gmail.com</p>
          <p><i className="fa fa-phone"></i>(999) 555-6767</p>

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
    );
  }
}
// 1/ export Contact
export default Contact;
