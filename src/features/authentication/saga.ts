/**
 * For process asynchronous
 * Watch for dispatched actions and fork a worker on every action
 */

import { takeLatest } from 'redux-saga/effects';
import { getAuthentication } from './actions';
import { getAuthenticationWorker } from './workers';

export function* authenticationSaga() {
  yield takeLatest(getAuthentication, getAuthenticationWorker);
}
