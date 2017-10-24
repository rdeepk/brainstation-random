import React, { Component } from 'react';
import Search from '../Search'
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Search Side Bar</h1>
        </header>
        <div>
          <Search itemsList={this.props.itemsList} />
        </div>
      </div>
    )
  }
}

export default App;
