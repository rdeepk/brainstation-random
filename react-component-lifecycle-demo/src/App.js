import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor() {
    super()
    this.state = {
      counter: 0
    }
    console.log("App::Constructor")
  }

  componentWillMount() {
    console.log("will mount");
  }

  componentDidMount() {
    console.log("did mount");
  }
  componentWillUpdate() {
    console.log("will update");
    console.log(this.state.counter);
  }
  componentDidUpdate() {
    console.log("did update");
    console.log(this.state.counter);
  }

  buttonHandler = () => {
    this.setState({
      counter:this.state.counter+1
    })
  }
  render() {
    console.log("App::Render");
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          counter: {this.state.counter}
          <button type="button" onClick={this.buttonHandler}>Click</button> 
        </p>
      </div>
    );
  }
}

export default App;
