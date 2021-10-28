import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import thunk from "redux-thunk";
import './index.css';
import App from './App';
import { reducer, Operation } from './reducer';

const store = createStore(reducer, applyMiddleware(thunk));

store.dispatch(Operation.userLogin());

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById(`root`)
);
