import { takeLatest, put, call } from "redux-saga/effects";
import axios from 'axios';
import * as types from '../state/actionTypes';
import * as actions from '../state/actionCreators';


const fetchThem = () => axios.get('http://gabe.mockable.io/quotes');

function* fetchQuotes() {
  yield put(actions.spinnerOn());
  const res = yield call(fetchThem);
  yield put(actions.fetchQuotesSuccess(res.data));
  yield put(actions.spinnerOff());
}

export default function watchFetchQuotes() {
  return takeLatest(types.FETCH_QUOTES, fetchQuotes);
}
