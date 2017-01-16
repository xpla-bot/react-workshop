import React, { Component } from 'react';
import Contact from './Contact';

class ContactList extends Component {
  render() {
// 5/ pass grouping func to Contact
    return (
      <div>
        {this.props.contacts.map(contact => {
          return <Contact
                    toggleGroupInclusion={this.props.toggleGroupInclusion}
                    selectContact={this.props.selectContact}
                    key={contact.id.value}
                    contactData={contact}/>;
        })}
      </div>
    );
  }
}

export default ContactList;
