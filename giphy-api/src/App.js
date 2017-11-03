import React, { Component } from 'react';
import axios from 'axios';
import Images from './Images';
import Search from './Search';
import './App.css';


class App extends Component {
  constructor() {
    super();
    this.state = {
      images: []
    }
  }

  setImages = (url) => {
    let promise = axios.get(url)
    promise.then((response) => {
      let data = response.data.data;
        let imagesJSX = data.map((elem, i) => {
          return <li key={i}><img src={elem.images.original.url} alt="" /></li>
        })
       this.setState({
         images: imagesJSX
       })
    })
    promise.catch(error => console.log(error));
  }
  
  componentWillMount() {
   this.setImages('https://api.giphy.com/v1/gifs/trending?api_key=Z1WqwGKj8IGx1lm0d7tnzNQfDYQ1pKMT&limit=25&rating=G');
  }

  search = (searchkey) => {
    let url = 'https://api.giphy.com/v1/gifs/search?api_key=Z1WqwGKj8IGx1lm0d7tnzNQfDYQ1pKMT&limit=25&offset=0&rating=G&lang=en&q='+searchkey;
    this.setImages(url)
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Gif Images</h1>
          <Search search={this.search} />
        </header>
        <Images imagesJSX={this.state.images} />
      </div>
    );
  }
}

export default App;
