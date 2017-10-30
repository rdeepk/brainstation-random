import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import About from './About';
import Contact from './Contact';

class App extends Component {
  constructor() {
    super();
    this.state = {
      page: ""
    }
  }

  changePage = (pageName) => {
    this.setState({
      page:pageName
    })
  }

  render() {
    let outputJSX;

    if(this.state.page === 'about') {
      outputJSX = <About changePage={this.changePage} />
    } else if(this.state.page === 'contact') {
      outputJSX = <Contact changePage={this.changePage}/>
    } else {
      outputJSX = <div>
        <h1>This is Home</h1>
          <a href="#about" onClick={()=>{this.changePage('about')}}>About</a><br />
          <a href="#contact" onClick={() => {this.changePage('contact')}}>Contact</a>
          </div>
    }
    
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          {outputJSX}
        </p>
      </div>
    );
  }
}

export default App;
