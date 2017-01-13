import React, { Component } from 'react';
import Contact from './Contact';

class ContactList extends Component {
  // Unlike state, props are immutable/read only
  // something like: this.props.contacts[0] = 'new string'
  // will throw a 'read-only' error when compiled
  render() {
    // 3/ We access the contacts through 'this.props'
    return (
      <Contact
        contactData={this.props.contacts[0]}/>
    );
  }
}

export default ContactList;
