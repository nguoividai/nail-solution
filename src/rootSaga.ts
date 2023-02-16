import { all, fork } from 'redux-saga/effects';
import { authenticationSaga } from './features/authentication/saga';
import { serviceSaga } from './features/services/saga';
import { technicianSaga } from './features/technician/saga';

export default function* rootSaga() {
  yield all([fork(serviceSaga), fork(technicianSaga), fork(authenticationSaga)]);
}
