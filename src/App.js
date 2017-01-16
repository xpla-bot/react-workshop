import React, { Component } from 'react';
import ContactList from './ContactList';
import ContactDetails from './ContactDetails';
// 1/ import GroupIcon
import GroupIcon from './GroupIcon';
import axios from 'axios';

class App extends Component {

  constructor() {
    super();
    this.state = {
      users: [],
      selectedContact: null,
      group: []
    }
    this.handleSelectContact = this.handleSelectContact.bind(this);
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
  // 3/ Add GroupIcon to App's render method
    return (
      <div className="container-fluid">
        <GroupIcon group={this.state.group} />
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
