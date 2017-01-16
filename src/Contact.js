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
{/* 7/ Added logic to show/hide button based on prop */}
          {this.props.showButton
            ? <div className="group">
                <i
                  onClick={() => this.props.toggleGroupInclusion(contact)}
                  className="fa fa-address-card-o"></i>
              </div>
            : null}
        </div>
      </div>
    );
  }
}

export default Contact;
