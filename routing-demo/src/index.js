import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router} from 'react-router-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import Home from './Home';
import About from './About';
import Contact from './Contact';

ReactDOM.render(
            <Router>
                <App />
            </Router>,
            document.getElementById('root'));
registerServiceWorker();
