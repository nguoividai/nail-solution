import { combineReducers } from 'redux';
import { bookingReducer } from './features/booking/reducers';
import { serviceReducer } from './features/services/reducers';

export const sagaReducers = combineReducers({
  booking: bookingReducer,
  service: serviceReducer,
});
