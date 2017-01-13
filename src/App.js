import React, { Component } from 'react';
import ContactList from './ContactList';
import axios from 'axios';

class App extends Component {
  constructor() {
    super();
    this.state = {
      users: []
    }
  }
  componentDidMount() {
    axios.get('./users.json')
      .then(res => {
        console.log(res);
        this.setState({
          users: res.data
        })
      })
  }
  render() {
    // The ContactList is taking in the state of App as props
    // 3/ & will be 'this.props.contacts' inside ContactList
    return (
      <ContactList
        contacts={this.state.users} />
    );
  }
}

export default App;
