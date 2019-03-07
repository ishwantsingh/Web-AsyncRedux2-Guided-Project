import uuid from 'uuid';
import * as types from './actionTypes';
import axios from '../axios/axios';


// create an async action creator login, that takes username and password,
// and hits the login api, and triggers a LOGIN_SUCCESS action with the userToken as payload.
export const login = user => dispatch => {
  dispatch({ type: 'LOGIN_STARTED' });
  fetch(`http://gabe.mockable.io/quotes/login?username=${user.username}&password=${user.password}`)
    .then(res => res.json())
    .then(data => {
      dispatch({ type: types.LOGIN_SUCCESS, payload: data.userToken });
    });
};

export const deleteQuoteAsync = id => dispatch => {
  dispatch(spinnerOn());
  axios().delete(`http://gabe.mockable.io/quotes/${id}`)
    .then(res => {
      dispatch(deleteQuote(res.data.id));
      dispatch(spinnerOff());
    });
};

export const getQuotesAsync = () => dispatch => {
  dispatch(spinnerOn());
  axios().get('http://gabe.mockable.io/quotes')
    .then(res => {
      dispatch({ type: types.ADD_QUOTES, payload: res.data });
      dispatch(spinnerOff());
    });
};

export const addQuoteAsync = quote => dispatch => {
  dispatch(spinnerOn());
  axios().post(`http://gabe.mockable.io/quotes`, quote)
    .then(res => {
      dispatch({ type: types.ADD_QUOTE, payload: res.data });
      dispatch(spinnerOff());
    });
};

export function spinnerOn() {
  return {
    type: types.SPINNER_ON,
  };
}

export function spinnerOff() {
  return {
    type: types.SPINNER_OFF,
  };
}

export function deleteQuote(id) {
  return {
    type: types.DELETE_QUOTE,
    payload: id,
  };
}

export function addQuote(author, text) {
  return {
    type: types.ADD_QUOTE,
    payload: {
      id: uuid(),
      author,
      text,
    },
  };
}

export function makeQuoteOfTheDay(id) {
  return {
    type: types.MAKE_QUOTE_OF_THE_DAY,
    payload: id,
  };
}
