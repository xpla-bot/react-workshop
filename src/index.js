import React from 'react';
import ReactDOM from 'react-dom';
// 1/ All the components are contained within App and it's children.
import App from './App';
import './style.css';
// 4/ Rather than attaching Contact to the DOM, we attach App
ReactDOM.render(
  <App />,
  document.getElementById('root')
);
