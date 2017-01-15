import React, { Component } from 'react';
import Contact from './Contact';

class ContactList extends Component {
  render() {
    return (
      <div>
        {this.props.contacts.map(contact => {
          return <Contact
                    selectContact={this.props.selectContact}
                    key={contact.id.value}
                    contactData={contact}/>;
        })}
      </div>
    );
  }
}

export default ContactList;
