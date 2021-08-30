import React, {Component} from 'react';
import logo from './logo.svg';
// import './App.css';
import Landing from './Landing.js';
import Nav from './Nav';

class App extends Component {
  render() {
    return (
      <div className = 'App'>
        <Nav></Nav>
        <header className="masthead d-flex homeContainer" id="home">
        <Landing></Landing>
        </header>
        
      </div>
    )
  }
}
export default App;
