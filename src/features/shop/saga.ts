/**
 * For process asynchronous
 * Watch for dispatched actions and fork a worker on every action
 */

import { takeLatest } from 'redux-saga/effects';
import { getBusiness } from './actions';
import { getBusinessWorker } from './workers';

export function* shopSaga() {
  yield takeLatest(getBusiness, getBusinessWorker);
}
