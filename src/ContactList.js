import React, { Component } from 'react';
import Contact from './Contact';

class ContactList extends Component {
  render() {
    return (
      <div>
{/*    use Array.map() to map over data and return */}
{/* 4/ one Contact for every item in the array */}
        {this.props.contacts.map(contact => {
          return <Contact
                    contactData={contact}/>;
        })}
      </div>
    );
// PROBLEM: in the browser console there is a key warning
// More on this next.
  }
}

export default ContactList;
