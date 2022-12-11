/**
 * For process asynchronous
 * Handle the action and terminate
 */

import { call, put, SagaReturnType } from 'redux-saga/effects';
import { SiteUrl } from 'src/types/app.types';
import { ActionSaga } from 'src/types/saga.types';
import {
  getAppointmentsOfTechError,
  getAppointmentsOfTechSuccess,
  getTechniciansError,
  getTechniciansSuccess,
} from './actions';
import { getAPIAppointmentsOfTech, getAPITechnicians } from './apis';
import { AppointmentsOfTech } from './types';

export function* getWorkerServices(action: ActionSaga<SiteUrl>) {
  try {
    const { payload } = action || {};
    if (payload?.site_url) {
      const { data }: SagaReturnType<typeof getAPITechnicians> = yield call(
        getAPITechnicians,
        payload
      );
      yield put(getTechniciansSuccess(data.technicians));
    }
  } catch (e) {
    yield put(getTechniciansError());
    console.error('Error', e);
  }
}

export function* getWorkerAppointmentsOfTech(action: ActionSaga<AppointmentsOfTech>) {
  try {
    const { payload } = action || {};
    if (payload?.site_url && payload?.date && payload?.technicianId) {
      const { data }: SagaReturnType<typeof getAPIAppointmentsOfTech> = yield call(
        getAPIAppointmentsOfTech,
        payload
      );
      yield put(
        getAppointmentsOfTechSuccess({
          technicianId: payload.technicianId,
          date: payload.date,
          appointments: data.appointments,
        })
      );
    }
  } catch (e) {
    yield put(getAppointmentsOfTechError());
    console.error('Error', e);
  }
}
