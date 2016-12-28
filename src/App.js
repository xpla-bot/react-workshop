import React, { Component } from 'react';

class App extends Component {
  render() {
    return (
      <div className="container">
        <p>React.js is a JavaScript library that allows you to build UI components that can be combined to make complex, interactive user interfaces (UIs).</p>
        <p>React renders UIs very quickly. It does so by comparing the current state of the DOM with the updates state (‘diff-ing’), and only re-rendering what has been changed.</p>
      </div>
    );
  }
}

export default App;
