import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App';
import registerServiceWorker from './registerServiceWorker';

const itemsList = [
    {
    categoryName: 'Sporting Goods',
    categoryItems : [
        {title: 'Football', price: '$49.99'},
        {title: 'Baseball', price: '$9.99'},
        {title: 'Basketball', price: '$29.99'}
    ]},
    {
        categoryName: 'Electronics',
        categoryItems : [
            {title: 'iPod Touch', price: '$99.99'},
            {title: 'iPhone 5', price: '$399.99'},
            {title: 'Nexus 7', price: '$199.99'}
      ]},

]

ReactDOM.render(<App itemsList={itemsList} />, document.getElementById('root'));
registerServiceWorker();
