import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import About from './About';
import Contact from './Contact';
import Home from './Home';

class App extends Component {

  render() {
    
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <div className="App-intro">
          <Home />
        </div>
      </div>
    );
  }
}

export default App;
