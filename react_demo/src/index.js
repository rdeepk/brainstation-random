import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Hello from './Hello';
import registerServiceWorker from './registerServiceWorker';

const name = "Kenneth";
//ReactDOM.render(<App />, document.getElementById('root'));
ReactDOM.render(<Hello name={name}/>, document.getElementById('root'));
registerServiceWorker();
