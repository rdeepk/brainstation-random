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
          <ImageNavigation handleClick={this.handleClick} imageIndex={this.state.image} />
				<div>
					<Images imageIndex={this.state.image} />
				</div>
			</div>			
		)
	}
}

class ImageNavigation extends React.Component {
  render() {
    return (
      <div>
			    	<button onClick={() => {this.props.handleClick(-1)}} disabled={this.props.imageIndex ===0?true:false}>Previous</button>
			      	<span>{this.props.imageIndex+1} of {images.length}</span>
			      	<button onClick={() => {this.props.handleClick(+1)}} disabled={this.props.imageIndex ===images.length-1?true:false}>Next</button>
			    </div>
    )
  }
}

class Images extends React.Component {
  render() {
    let imagesJSX = images.map((image, i) => {
      return <img key={i} src={image} style={{display:this.props.imageIndex === i ? "inline-block":"none"}} />
    })
    return (
      <div>{imagesJSX}</div>
    )
  }
}

export default App;
