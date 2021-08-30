import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import anime from '../node_modules/animejs/lib/anime.min.js';
import Waypoint from '../node_modules/waypoints/lib/noframework.waypoints.min.js';

ReactDOM.render(
  <React.StrictMode>
    <App />
    {/* <Nav/>
    <Landing /> */}
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
