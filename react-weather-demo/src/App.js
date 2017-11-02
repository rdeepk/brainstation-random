import React, { Component } from 'react';
import axios from 'axios';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor(){
    super();
    this.state = {
      city: '',
      time: '',
      temperature: '',
      summary:''
    }
  }
  componentWillMount() {
    let promise = axios.get('https://cors-anywhere.herokuapp.com/https://api.darksky.net/forecast/94cd206408f85af008b3a9a3bd4bbdd8/49.2827, 123.1207')
    promise.then((response) => {
      console.log(response);
      this.setState({
        city:'',
        time: response.data.currently.time,
        temperature:response.data.currently.temperature,
        summary: response.data.currently.summary
      })
    })
    promise.catch(function (error) {
      console.log(error);
    });
  }

   render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          City: <br />
          Time: {this.state.time}<br />
          Summary: {this.state.summary}<br />
          Temperature: {this.state.temperature} F<br />
        </p>
      </div>
    );
  }
}

export default App;
