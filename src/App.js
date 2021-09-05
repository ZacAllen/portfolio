import React, {Component} from 'react';
import logo from './logo.svg';
// import './App.css';
import Landing from './Landing.js';
import Nav from './Nav';
import Portfolio from './Portfolio';

class App extends Component {
  render() {
    return (
      <div className = 'App'>
        <Nav></Nav>
        <header className="masthead homeContainer" id="home">
        <Landing></Landing>
        </header>
        <section id = "portfolio">
        <Portfolio></Portfolio>
        </section>
        
      </div>
    )
  }
}
export default App;
