/**
 * For process asynchronous
 * Handle the action and terminate
 */

import { call, put, SagaReturnType } from 'redux-saga/effects';
import { SiteUrl } from 'src/types/app.types';
import { ActionSaga } from 'src/types/saga.types';
import { getTechniciansError, getTechniciansSuccess } from './actions';
import { getAPITechnicians } from './apis';

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
