/**
 * For process asynchronous
 * Handle the action and terminate
 */

import { call, put, SagaReturnType } from 'redux-saga/effects';
import { SiteUrl } from 'src/types/app.types';
import { ActionSaga } from 'src/types/saga.types';
import { getAuthenticationError, getAuthenticationSuccess } from './actions';
import { getAuthenticationAPI } from './apis';

export function* getAuthenticationWorker(action: ActionSaga<SiteUrl>) {
  try {
    const { payload } = action || {};
    if (payload?.token) {
      const { data }: SagaReturnType<typeof getAuthenticationAPI> = yield call(
        getAuthenticationAPI,
        payload
      );
      yield put(getAuthenticationSuccess(data));
    }
  } catch (e) {
    yield put(getAuthenticationError());
    console.error('Error', e);
  }
}
