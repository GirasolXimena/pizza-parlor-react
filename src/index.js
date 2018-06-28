import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App/App';
import registerServiceWorker from './registerServiceWorker';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import {logger} from 'redux-logger';

const pizzaReducer = (state = {}, action) => {
    if(action.type === 'ADD'){
        console.log('add to menu reducer');
        return {
            ...state,
            menu: action.payload
        }
    } else {
        return state;
    }
}

const storeInstance = createStore(
    combineReducers({
        pizzaReducer
    }),
);

ReactDOM.render(<Provider store={storeInstance}><App /></Provider>, document.getElementById('root'));
registerServiceWorker();
