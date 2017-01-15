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
//     This shows rendering the List and Details
//     using ternary operators in the render method.
// 20/ Also added Bootstrap grid classes
  render() {
    return (
      <div className="container-fluid">
        <div className="row">
          <div className="col-sm-6">
            {this.state.users.length
              ? <ContactList
                    selectContact={this.handleSelectContact}
                    contacts={this.state.users} />
              : <h1 className="loading">Loading data...</h1>}
          </div>
          <div className="col-sm-6">
            {this.state.selectedContact
              ? <ContactDetails
                    contact={this.state.selectedContact} />
              : <h1 className="loading">Select a contact</h1>}
          </div>
        </div>
      </div>
    )
  }
}

export default App;
