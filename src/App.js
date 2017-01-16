import React, { Component } from 'react';
import ContactList from './ContactList';
import ContactDetails from './ContactDetails';
import axios from 'axios';

class App extends Component {

  constructor() {
    super();
// 5/ Added an empty array to GROUP
    this.state = {
      users: [],
      selectedContact: null,
      group: []
    }
    this.handleSelectContact = this.handleSelectContact.bind(this);
// 1/ Bind grouping func to ensure 'this' refers to App's 'this'
    this.handleGroupListInclusion = this.handleGroupListInclusion.bind(this);
  }

  componentDidMount() {
    axios.get('./users.json')
      .then(res => {
        this.setState({
          users: res.data
        })
      })
  }

  handleSelectContact(contact) {
    this.setState({
      selectedContact: contact
    })
  }

// 13/ Create function that adds or removes contact
  handleGroupListInclusion(contact) {

    if( this.state.group.includes(contact) ) {
      this.setState({
        group: this.state.group.filter(c => c.id.value !== contact.id.value)
      })
    } else {
      this.setState({
        group: [contact, ...this.state.group]
      })
    }

  }

  renderContactList() {
    if (this.state.users.length) {
  // 2/ pass grouping function to ContactList
      return <ContactList
                toggleGroupInclusion={this.handleGroupListInclusion}
                selectContact={this.handleSelectContact}
                contacts={this.state.users} />;
    } else {
      return <h1 className="loading">Loading data...</h1>;
    }
  }

  renderContactDetails() {
    if (this.state.selectedContact) {
      return <ContactDetails
                contact={this.state.selectedContact} />;
    } else {
      return <h1 className="loading">Select a contact</h1>;
    }
  }

  render() {
    return (
      <div className="container-fluid">
        <div className="row">
          <div className="col-sm-6">
            {this.renderContactList()}
          </div>
          <div className="col-sm-6">
            {this.renderContactDetails()}
          </div>
        </div>
      </div>
    )
  }
}

export default App;
