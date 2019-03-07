import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import Container from './components/Container';
import { quotes, quoteOfTheDay, spinner } from './state/reducers';
import * as types from './state/actionTypes';

// create custom middleware to save 'userToken' to local storage on LOGIN_SUCCESS
const customMiddlewareToSaveUserToke = store => next => action => {
  console.log(store);
  if (action.type === types.LOGIN_SUCCESS) {
    localStorage.setItem('userToken', action.payload);
  }
  next(action);
};

const rootReducer = combineReducers({
  quotes,
  quoteOfTheDay,
  spinner,
});

const store = createStore(
  rootReducer,
  {},
  compose(
    applyMiddleware(thunk, customMiddlewareToSaveUserToke),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
  ),
);

ReactDOM.render(
  <Provider store={store}>
    <Container />
  </Provider>,
  document.querySelector('#target'),
);
