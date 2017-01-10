import React, { Component } from 'react';

class Info extends Component {
  render() {
    return (
      <div className="container">
        <p>React has a set of functions/hooks that fire at particular moments during the life of a component.</p>
        <p>One very useful Lifecycle hook is the <b>componentDidMount</b> function</p>
        <ul>
          <li>This fires immediately after the component is mounted to the DOM.</li>
          <li>This is where AJAX calls should live.</li>
          <li>When we get data from an AJAX call, we need to set it to the component’s state.</li>
        </ul>
        <p>In order to get started with AJAX, we need install the AJAX library <b>Axios</b></p>
        <p>Open your terminal, navigate to the project folder and type the following command:</p>
        <pre>npm install axios</pre>
      </div>
    );
  }
}

export default Info;
