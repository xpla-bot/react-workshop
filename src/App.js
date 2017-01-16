import React, { Component } from 'react';
import ContactList from './ContactList';
import ContactDetails from './ContactDetails';
import axios from 'axios';

class App extends Component {

  constructor() {
    super();
    this.state = {
      users: [],
      selectedContact: null
    }
    this.handleSelectContact = this.handleSelectContact.bind(this);
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
    }, () => {
      console.log('selected: ', this.state.selectedContact);
    })
  }

//     Take logic out of the render method by creating
//     functions that contain the logic, and then call
// 18/ the functions from within the render method.
  renderContactList() {
    if (this.state.users.length) {
      return <ContactList
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
// 12/ Call the two new functions from within render()
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
