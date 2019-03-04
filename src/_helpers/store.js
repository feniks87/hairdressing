import { createStore, applyMiddleware, compose } from 'redux';
import rootReducer from '../_reducers/root.reducer';
import thunkMiddleware from 'redux-thunk';
import { createLogger } from 'redux-logger';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const loggerMiddleware = createLogger();

export const store = createStore(
    rootReducer,
    composeEnhancers(applyMiddleware(thunkMiddleware, loggerMiddleware))
);