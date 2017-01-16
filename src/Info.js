import React, { Component } from 'react';

class Info extends Component {
  render() {
    return (
      <div className="container">
        <p className="title">React Router</p>
        <p>First, we have to import <b>React Router</b></p>
        <pre style={{marginLeft: 20}}>npm install --save react-router@next</pre>
        <p>In <b>Index.js</b> rather than attaching a component to the DOM, we will attach the router.</p>
        <p>The router will watch the url, and determine which component to render based on the <b>url path</b>.</p>
      </div>
    );
  }
}

export default Info;
