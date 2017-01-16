import React from 'react';
import ReactDOM from 'react-dom';
// 1/ import three modules from react-router
import { BrowserRouter, Match, Miss } from 'react-router';

// 1/ rename 'App' to 'MainView'
import MainView from './MainView';
// 1/ create and import the shell of the Group component
import GroupView from './GroupView';
import './style.css';

// 10/ create a function component (more on functional components later)
const Routes = () => {
  return (
    <BrowserRouter>
{/* All 'Match' components need to be wrapped in a single tag/div */}
      <div>
        <Match exactly pattern="/" component={MainView} />
        <Match pattern="/group" component={GroupView} />
      </div>
    </BrowserRouter>
  );
}

// 4/ Attach <Routes /> to the DOM
ReactDOM.render(
  <Routes />,
  document.getElementById('root')
);
