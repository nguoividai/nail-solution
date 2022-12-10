/**
 * For process asynchronous
 * Handle the action and terminate
 */

import { call, put, SagaReturnType } from 'redux-saga/effects';
import { SiteUrl } from 'src/types/app.types';
import { ActionSaga } from 'src/types/saga.types';
import { getServicesError, getServicesSuccess } from './actions';
import { getAPIServices } from './apis';

export function* getWorkerServices(action: ActionSaga<SiteUrl>) {
  try {
    const { payload } = action || {};
    if (payload?.site_url) {
      const { data }: SagaReturnType<typeof getAPIServices> = yield call(getAPIServices, payload);
      yield put(getServicesSuccess(data.services));
    }
  } catch (e) {
    yield put(getServicesError());
    console.error('Error', e);
  }
}
