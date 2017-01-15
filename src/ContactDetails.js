import React, {Component} from 'react';
import Avatar from './Avatar';

class ContactDetails extends Component {
  render() {
    const { contact } = this.props;

    return (
      <div className="contact-details media">
        <div>
          <h3>{contact.name.title} {contact.name.first} {contact.name.last}</h3>
          <Avatar
            img_src={contact.picture.large} />
        </div>
        <div>
          <h4>Address:</h4>
          <p>{contact.location.street}</p>
          <p>{contact.location.city}, {contact.location.state} {contact.location.postcode}</p>
        </div>
        <div>
          <p><i className="fa fa-envelope-o"></i>{contact.email}</p>
          <p><i className="fa fa-phone"></i>{contact.phone}</p>
        </div>
      </div>
    );
  }
}

export default ContactDetails;
