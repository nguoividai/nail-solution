/**
 * For process asynchronous
 * Watch for dispatched actions and fork a worker on every action
 */

import { takeLatest } from 'redux-saga/effects';
import { getServices } from './actions';
import { getWorkerServices } from './workers';

export function* serviceSaga() {
  yield takeLatest(getServices, getWorkerServices);
}
