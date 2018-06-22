import React, { Component } from 'react';
import logoSrc from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    const logo = React.createElement('img', {src: logoSrc, className: 'App-logo', alt: 'logo'});
    const title = React.createElement('h1', {className: 'App-title'}, ['Welcome to React']);
    const header = React.createElement('header', {className: 'App-header'}, [logo, title]);
    const paragraph =
      React.createElement('p', {className: 'App-intro'}, ['To get started, edit src/App.js and save to reload.']);
    return React.createElement('div', {className: 'App'}, [header, paragraph]);
  }
}

export default App;
