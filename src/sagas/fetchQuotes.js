import { takeLatest, put, call } from "redux-saga/effects";
import axios from 'axios';
import * as types from '../state/actionTypes';


const fetchThem = () => axios.get('http://gabe.mockable.io/quotes');

function* fetchQuotes() {
  const res = yield call(fetchThem);
  yield put({ type: types.FETCH_QUOTES_SUCCESS, payload: res.data });
}

export default function watchFetchQuotes() {
  return takeLatest(types.FETCH_QUOTES, fetchQuotes);
}
