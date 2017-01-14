import React, { Component } from 'react';
import Contact from './Contact';

class ContactList extends Component {
  render() {
//    Passing props won't cause an
// 4/ error bc we know data is there
    return (
      <Contact
        contactData={this.props.contacts[0]}/>
    );
  }
}

export default ContactList;
