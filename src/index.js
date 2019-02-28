import {Provider} from 'react-redux';
import {BrowserRouter as Router} from 'react-router-dom';

import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

import {reducer} from './reducer.js'
import {createStore} from 'redux';
let {store} = createStore(reducer);



//store is the way we access and change state and we pass that to Provider who will handle the state across all of our components

ReactDOM.render(<Provider store={store}><Router><App /></Router></Provider>, document.getElementById('root'));
