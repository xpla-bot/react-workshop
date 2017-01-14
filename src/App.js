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
    return (
      <div>
        {this.state.users.length
          ? <ContactList
                contacts={this.state.users} />
          : <h1>Loading data...</h1>}
      </div>

    );
  }
}

export default App;
