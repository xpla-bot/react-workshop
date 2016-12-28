import React from 'react';
import ReactDOM from 'react-dom';
// 1/ import the Contact component
import Contact from './Contact';
import './style.css';

// Mount the Contact component to the DOM.
ReactDOM.render(
  <Contact />,
  document.getElementById('root')
);
