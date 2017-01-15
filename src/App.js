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
//    When AJAX returns, state is set.
//    Using this.setState() makes React checks to see
// 3/ if the DOM need to be re-rendered.
        this.setState({
          users: res.data
        })
      })
  }
  render() {
// 8/ Only render ContactList if users are in state.
    return (
      <div>
        {this.state.users.length
          ? <ContactList
                contacts={this.state.users} />
          : <h1 className="loading">Loading data...</h1>}
      </div>
    );
  }
}

export default App;
