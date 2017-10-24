import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App';
import registerServiceWorker from './registerServiceWorker';

const blogPosts = [
    { title: 'Blog Post title 1', content:'Some content.'},
    { title: 'Blog Post title 2', content:'Some more content.'},
    { title: 'Blog Post title 3', content:'Some extra content.'}
]

ReactDOM.render(<App blogPosts={blogPosts} />, document.getElementById('root'));
registerServiceWorker();
