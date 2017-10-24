import React, { Component } from 'react';
import BlogList from '../BlogList';
import './App.css';

class App extends Component {
  render() {
    console.log(this.props.blogPosts);
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Welcome to My Blog</h1>
        </header>
        <div>
          <BlogList blogPosts={this.props.blogPosts} />
        </div>
      </div>
    );
  }
}

export default App;
