import React, { Component } from 'react';

class Info extends Component {
  constructor() {
    super();
    this.state = {
      string: '<ContactList contacts={this.state.users} />'
    }
  }
  render() {
    return (
      <div className="container">
        <p>React uses two data types: State and Props.</p>
        <ul>
          <li><b>State</b>, as we have seen, is mutable. E.g. this.setState()</li>
          <li><b>Props</b> are immutable. Assigning a value to them will cause an error.</li>
        </ul>
        <p>We are now using props to pass data from App to ContactList.</p>
        <p>Props look like HTML attributes in the parent component file.</p>
        <pre style={{marginLeft: 20}}>{this.state.string}</pre>
        <p>Let’s look at a set of slides that enumerate important differences between state and props.</p>
      </div>
    );
  }
}

export default Info;
