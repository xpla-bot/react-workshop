import React, { Component } from 'react';
import Contact from './Contact';

class ContactList extends Component {
  render() {
    return (
      <Contact
        contactData={this.props.contacts[0]}/>
    );
  }
}

export default ContactList;
