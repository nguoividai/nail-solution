/**
 * For process asynchronous
 * Watch for dispatched actions and fork a worker on every action
 */

import { takeLatest } from 'redux-saga/effects';
import { getTechnicians } from './actions';
import { getWorkerServices } from './workers';

export function* technicianSaga() {
  yield takeLatest(getTechnicians, getWorkerServices);
}
