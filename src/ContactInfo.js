import React, { Component } from 'react';

class ContactInfo extends Component {
  render() {
    return (
      <div className="contact-info">
        <h4 className="media-heading">
          {this.props.contactName.first} {this.props.contactName.last}
        </h4>
        <p><i className="fa fa-envelope-o"></i>{this.props.email}</p>
        <p><i className="fa fa-phone"></i>{this.props.phone}</p>
      </div>
    );
  }
}

export default ContactInfo;
