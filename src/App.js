// Anatomy of a React Component: 4 parts

// 1/ (1) Import React, and the Component class
import React, { Component } from 'react';
// 1/ (2) Create a component of your own by extending React's component class.
class App extends Component {
  // 5/ (3) Create a render() method that RETURNS a single HTML element.
  render() {
    return (
      <h1>I'm a React component 🤘</h1>
    );
  }
}
// 1/ (4) Export your component for use throughout your app.
export default App;
