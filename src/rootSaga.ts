import { all, fork } from 'redux-saga/effects';
import { serviceSaga } from './features/services/saga';

export default function* rootSaga() {
  yield all([fork(serviceSaga)]);
}
