import React, { Component } from 'react';

class ContactInfo extends Component {
  render() {
    // /7 Make sure to use {} to insert props into your HTML
    return (
      <div className="contact-info">
        <h4 className="media-heading">{this.props.contactName}</h4>
        <p><i className="fa fa-envelope-o"></i>{this.props.email}</p>
        <p><i className="fa fa-phone"></i>{this.props.phone}</p>
      </div>
    );
  }
}

export default ContactInfo;
