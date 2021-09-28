import React, {Component} from 'react';
import logo from './logo.svg';
// import './App.css';
import Landing from './Landing.js';
import Nav from './Nav';
import Portfolio from './Portfolio';
import Resume from './Resume';
import Contact from './Contact';
import Footer from './Footer';
import Backgrounds from './Backgrounds';

class App extends Component {
  render() {
    return (
      <div className = 'App' style={{position: 'relative'}}>
        <Backgrounds></Backgrounds>

        <div style={{position: 'absolute'}}>
          <Nav></Nav>
          <header className="masthead homeContainer" id="home">
          <Landing></Landing>
          </header>
          <section id = "portfolio">
          <Portfolio></Portfolio>
          </section>
          <section className="Resume" id="resumeSection">
          <Resume></Resume>  
          </section>
          <section className="content-section" id = "contact" style={{padding: 0}}>
          <Contact></Contact>  
          </section>
          <Footer></Footer>
        </div>
        
      </div>
    )
  }
}
export default App;
