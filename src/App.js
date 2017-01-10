import React, { Component } from 'react';
import ContactList from './ContactList';
// add axios to project: 'npm install axios --save'
// 1/ import axios for use in component
import axios from 'axios';

class App extends Component {
  // 11/ this hook is called after comp. is mounted to DOM
  componentDidMount() {
    axios.get('./users.json')
      .then(res => {
        // 1/ axios returns 6 properties
        console.log(res);
        // 3/ the users are in the 'data' property
        this.setState({
          users: res.data
        })
      })
  }
  render() {
    return (
      <ContactList />
    );
  }
}

export default App;
