/**
 * For process asynchronous
 * Watch for dispatched actions and fork a worker on every action
 */

import { takeLatest } from 'redux-saga/effects';
import { getAppointmentsOfTech, getTechnicians } from './actions';
import { getWorkerAppointmentsOfTech, getWorkerServices } from './workers';

export function* technicianSaga() {
  yield takeLatest(getTechnicians, getWorkerServices);
  yield takeLatest(getAppointmentsOfTech, getWorkerAppointmentsOfTech);
}
