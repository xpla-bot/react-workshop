import React, { Component } from 'react';

class Info extends Component {
  render() {
    return (
      <div className="container">
        <p>So far we’ve only been dealing with "regular" components.</p>
        <p>In practice there are two types of React components: <b>Regular</b> and <b>Container</b> components.</p>
        <p>These two types are conventions, they are NOT baked into React.</p>
        <p>Let’s take a look a set of slides that list the defining characteristics of these two types of components.</p>
      </div>
    );
  }
}

export default Info;
