
import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor() {
    super()

    this.state = {
      text: "",
      output: []
    }
  }

  textHandler = (event) => {
    this.setState({
      text: event.target.value
    })
  }

  clickHandler = () => {
    this.setState({
      output: this.state.output.concat(this.state.text)
    })
  }

  render() {

    console.log(this.state.output);

    let outputJSX = this.state.output.map((text) => {
      return <li>{text}</li>
    })

    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <div className="App-intro">
          <h2>Please Type Something:</h2>
          <div><input 
                type="text" 
                onChange={(event) => {this.textHandler(event)}} 
               /></div>
          <div><button type="button" onClick={this.clickHandler}>Submit</button></div>
          <h3>You Typed:</h3>
          <ul>{outputJSX}</ul>
        </div>
      </div>
    );
  }
}

export default App;