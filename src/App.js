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

  render() {
//    Render ContactDetails rather than ContactList
//    ContactDetails will soon use state property
//    'selectedContact'. Using state.users only
// 8/ for building/demoing the component
    return (
      <div>
        {this.state.users.length
          ? <ContactDetails
                contact={this.state.users[2]} />
          : <h1 className="loading">Loading data...</h1>}
      </div>
    )
  }
}

export default App;
