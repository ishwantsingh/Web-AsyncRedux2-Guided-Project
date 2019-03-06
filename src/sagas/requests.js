import { takeLatest, put } from "redux-saga/effects";
import * as types from '../state/actionTypes';


function* req(action) {
  yield put({ type: types.SAGA_ANSWERS });
}

export function watchRequests() {
  return takeLatest(types.WAKE_UP_SAGA, req);
}
