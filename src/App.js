import React, { Component } from 'react';
import ContactList from './ContactList';

class App extends Component {
  render() {
    return (
      <div className="container">
        <p>We now have a ContactList and Contact components.</p>
        <p>In our ContactList we need an array of data to loop over. We'll then create a Contact for every item of data in the array.</p>
        <p>To do this we will first go over:</p>
        <ul>
          <li><b>AJAX</b> in React</li>
          <li><b>Axios</b>, an AJAX library</li>
          <li>React's <b>Lifecycle hooks</b>, which provide functions that fire at specific points in a component's life.</li>
        </ul>
      </div>
    );
  }
}

export default App;
