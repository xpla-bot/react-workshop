import React, { Component } from 'react';
import ContactList from './ContactList';
import axios from 'axios';

class App extends Component {
  constructor() {
    super();
    this.state = {
      users: [],
      selectedContact: null
    }
//    Bind all class methods in the constructor
//    In this case, need the 'this' of this.setState
// 1/ to refer to App (our container component)
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
  //    'handleSelectContact' will be pass from
  //    App --> ContactList
  //    ContactList --> ContactList
  // 1/ attached to HTML inside of Contact
  handleSelectContact(contact) {
    this.setState({
      selectedContact: contact
    }, () => {
      console.log('selected: ', this.state.selectedContact);
    })
  }
  render() {
// 9/ Pass 'handleSelectContact' down as a prop
    return (
      <div>
        {this.state.users.length
          ? <ContactList
                selectContact={this.handleSelectContact}
                contacts={this.state.users} />
          : <h1 className="loading">Loading data...</h1>}
      </div>
    );
  }
}

export default App;
