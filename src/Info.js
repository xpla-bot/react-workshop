import React, { Component } from 'react';

class Info extends Component {
  render() {
    return (
      <div className="container">
        <p className="title">Waiting For Data: Ternary Operators</p>
          <p>Before we start using data in our component, we have to ensure the data is retrieved.</p>
          <p>A very common React error occurs when you app renders on the assumption that the app has data, but the data hasn’t yet returned from the AJAX call.</p>
          <p>In React, this is usually solved by using <b>ternary operators</b>.</p>
          <p>We can use curly braces to execute JavaScript in the JSX of our render method. We can write a ternay between curly braces in our App components.</p>
          <p>Before we look at the new code in App.js let's look at a slide that breaks down the elements of a ternary.</p>
      </div>
    );
  }
}

export default Info;
