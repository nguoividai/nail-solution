/**
 * For process asynchronous
 * Handle the action and terminate
 */

import { call, put, SagaReturnType } from 'redux-saga/effects';
import { ActionSaga } from 'src/types/saga.types';
import { Authentication } from '../authentication/types';
import { getBusinessError, getBusinessSuccess } from './actions';
import { getBusinessAPI } from './apis';

export function* getBusinessWorker(action: ActionSaga<Authentication>) {
  try {
    const { payload } = action || {};
    const { api_token, url } = payload || {};
    if (api_token && url) {
      const { data }: SagaReturnType<typeof getBusinessAPI> = yield call(getBusinessAPI, {
        api_token,
        url,
      });
      yield put(getBusinessSuccess(data.business));
    }
  } catch (e) {
    yield put(getBusinessError());
    console.error('Error', e);
  }
}
