import React, { Component } from 'react';
import Contact from './Contact';

class ContactList extends Component {
  render() {
// 9/ Pass 'handleSelectContact' down as a prop again
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
