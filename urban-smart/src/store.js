import { createStore, compose, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import {reducer} from './reducer';

/* eslint-disable no-underscore-dangle */
const composeEnhancers =
    process.env.NODE_ENV !== 'production' &&
        typeof window === 'object' &&
        window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ?
        window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({}) : compose;
/* eslint-enable */

const configureStore = preloadedState => (
    createStore(
        reducer,
        preloadedState,
        composeEnhancers(
            applyMiddleware(thunk.withExtraArgument())
        ),
    )
);

const store = configureStore({});

export default store;
