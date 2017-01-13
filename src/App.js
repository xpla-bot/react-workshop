import React, { Component } from 'react';
import ContactList from './ContactList';
import axios from 'axios';

class App extends Component {
  constructor() {
    // 1/ super creates 'this' is constructor
    super();
// 3/  constructor is the ONLY place to assign state with '='
    this.state = {
      users: []
    }
    // to change state elsewhere use this.setState();
  }
  componentDidMount() {
    axios.get('./users.json')
      .then(res => {
        console.log(res);
        // 3/ Outside of contstructor use this.setState()
        this.setState({
          users: res.data
        })
// this.setState makes React check for DOM changes
// if new state changes how DOM should appear,
// then React implements a re-render of JUST the
// DOM branch that needs re-rendering
      })
  }
  render() {
    return (
      <ContactList />
    );
  }
}

export default App;
