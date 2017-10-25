import React, { Component } from 'react';
import './App.css';
import TodoList from '../TodoList';
class App extends Component {
  constructor(props){
    super(props)
    //state must be an object
    this.state = {
      todos: props.todos,
      text:"",
      output:""
    }
  }
  clickHandler = () => {
    this.setState({
      output: this.state.text
    })
  }

  textHandler = (event) => {
    this.setState({
      text: event.target.value
    })
    console.log(event.target.value);
  }

  toggleDone = (index) => {
    this.state.todos[index].done = !this.state.todos[index].done;
    this.setState({
        todos: this.state.todos

    },() =>{
      console.log(this.state.todos);
    })
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <div className="">
            <TodoList todos= {this.state.todos} 
                      toggleDone = {this.toggleDone} />
        </div>
        <div><input type="text"  onKeyPress={(event) => {this.textHandler(event)}} /></div>
        <div><button type="submit" onClick={this.clickHandler}>Send</button></div>
        <h3>You typed:</h3>
        <p className="text">{this.state.output}</p>
      </div>
    );
  }
}

export default App;
