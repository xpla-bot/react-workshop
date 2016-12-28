import React, { Component } from 'react';

class App extends Component {
  render() {
    return (
      <div className="container">
        <p className="title">Create React App:</p>
        <p>Getting a React project started used to be a difficult endeavor, arguably more difficult than building the indended app!</p>
        <p>The Facebook team recognized this obstacle to using React, and developed a Command Line Interface (CLI) to make starting a React project dead simple.</p>
        <p>If you haven't done so yet, open your terminal and:</p>
        <pre>npm install -g create-react-app</pre>
        <p>to install create-react-app globally.</p>
        <hr />
        <p>When you have create-react-app installed, navigate to where you want your project to appear and:</p>
        <pre>create-react-app shopping-app</pre>
        <p>This will create a 'shopping-app' directory with a React starter project.</p>
      </div>
    );
  }
}

export default App;
