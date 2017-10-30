import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

/* List of image urls ------------------------------
'http://imgur.com/9itd49u.png'
'http://imgur.com/n19BXfZ.png'
'http://imgur.com/VBwQmzA.png'
'http://imgur.com/nawDxVv.png'
-------------------------------------------------- */
let images = [
     'http://imgur.com/9itd49u.png',
     'http://imgur.com/n19BXfZ.png',
     'http://imgur.com/VBwQmzA.png',
     'http://imgur.com/nawDxVv.png'
      ];

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      image: 0
    }
  }

  handleClick = (operator) => {
      this.setState({
        image:this.state.image + operator
      })
  }

	render() {
		return (
			<div style={{textAlign:'center'}}>
				<h1>Calvin Carousel</h1>
			    <div>
			    	<button onClick={() => {this.handleClick(-1)}} disabled={this.state.image ===0?true:false}>Previous</button>
			      	<span>{this.state.image+1} of {images.length}</span>
			      	<button onClick={() => {this.handleClick(+1)}} disabled={this.state.image ===images.length-1?true:false}>Next</button>
			    </div>
				<div>
					<img src={images[this.state.image]} />
				</div>
			</div>			
		)
	}
}

export default App;
