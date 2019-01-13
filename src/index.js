import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import * as serviceWorker from './serviceWorker';
import {createStore} from 'redux';
import {combineReducers} from 'redux';
import {Provider} from 'react-redux';
import person from './reducers/people';

const reducers=combineReducers({
    people:person
});

const store=createStore(reducers);

ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'));
serviceWorker.unregister();
