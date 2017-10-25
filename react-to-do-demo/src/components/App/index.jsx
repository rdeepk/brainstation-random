import React, { Component } from 'react';
import './App.css';
import TodoList from '../TodoList';
class App extends Component {
  render() {

    console.log(this.props.todos);
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <div className=""><TodoList todos= {this.props.todos}/></div>
      </div>
    );
  }
}

export default App;
