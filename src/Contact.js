import React, { Component } from 'react';
import Avatar from './Avatar';
import ContactInfo from './ContactInfo';
import Rating from './Rating';

class Contact extends Component {

  render() {

    const contact = this.props.contactData;

    return (
      <div
        className="media"
        onClick={() => this.props.selectContact(contact)}>
        <div className="media-body">

          <Avatar
            img_src={contact.picture.large} />

          <div className="middle">

            <ContactInfo
              contactName={contact.name}
              email={contact.email}
              phone={contact.phone}/>

            <Rating />

          </div>
          <div className="group">
              {/* 3/ add group toggle func to onClick */} 
            <i
              onClick={() => this.props.toggleGroupInclusion(contact)}
              className="fa fa-address-card-o"></i>
          </div>
        </div>
      </div>
    );
  }
}

export default Contact;
