import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Hello from './Hello';
import GoodBye from './GoodBye';
import registerServiceWorker from './registerServiceWorker';

const name = "Kenneth";
//ReactDOM.render(<App />, document.getElementById('root'));
ReactDOM.render(<Hello name={name}/>, document.getElementById('root1'));
ReactDOM.render(<GoodBye firstName="Rk"
                        lastName = "Deep"/>,
                        document.getElementById('root2'));
ReactDOM.render(<GoodBye firstName="Nick"
                        lastName = "Tamura"/>,
                        document.getElementById('root3'));
registerServiceWorker();
