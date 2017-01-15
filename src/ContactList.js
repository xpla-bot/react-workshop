import React, { Component } from 'react';
import Contact from './Contact';

class ContactList extends Component {
  render() {
    return (
      <div>
{/*    To help React keep track of DOM changes, each */}
{/* 5/ iterable needs a UNIQUE key prop. */}
        {this.props.contacts.map(contact => {
          return <Contact
                    key={contact.id.value}
                    contactData={contact}/>;
        })}
      </div>
    );
// With the key prop, React can efficiently detect DOM changes
// even when there are THOUSANDS of DOM nodes on a webpage.
  }
}

export default ContactList;
