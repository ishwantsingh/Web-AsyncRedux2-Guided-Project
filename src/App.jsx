import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import { Provider } from 'react-redux';
import createSagaMiddleware from 'redux-saga';
import thunk from 'redux-thunk';
import Container from './components/Container';
import { quotes, quoteOfTheDay, spinner } from './state/reducers';
import rootSaga from './sagas';

const saga = createSagaMiddleware();

const middlewares = [
  saga,
  thunk,
];

const rootReducer = combineReducers({
  quotes,
  quoteOfTheDay,
  spinner,
});

const store = createStore(
  rootReducer,
  {},
  compose(
    applyMiddleware(...middlewares),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
  ),
);

const render = () => ReactDOM.render(
  <Provider store={store}>
    <Container />
  </Provider>,
  document.querySelector('#target'),
);

saga.run(rootSaga);
render();
store.subscribe(render);
