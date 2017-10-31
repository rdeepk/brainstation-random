import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import Home from './Home';
import About from './About';
import Contact from './Contact';

ReactDOM.render(
            <Router>
                <Switch>
                    <Route path="/" exact component={App} /> //without exact keyword this route will match all the routes because every one has a / and this is the first one the router will encounter, so this will run every single time. To overcome that exact keyword is used.
                    <Route path="/about" component={About} />
                    <Route path="/home" component={Home} />
                    <Route path="/contact" component={Contact} />
                </Switch>
            </Router>,
            document.getElementById('root'));
registerServiceWorker();
