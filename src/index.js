import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Match, Miss } from 'react-router';
import MainView from './MainView';
import GroupView from './GroupView';
import './style.css';

// 5/ Add a functional component for 'not found' urls
const NotFound = () => {
  return(
    <h1>Page Not Found!</h1>
  )
}

// 10/ Added a Miss component to catch all other urls
const Routes = () => {
  return (
    <BrowserRouter>
      <div>
        <Match exactly pattern="/" component={MainView} />
        <Match pattern="/group" component={GroupView} />
        <Miss component={NotFound} />
      </div>
    </BrowserRouter>
  );
}

ReactDOM.render(
  <Routes />,
  document.getElementById('root')
);
