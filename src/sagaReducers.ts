import { combineReducers } from 'redux';
import { bookingReducer } from './features/booking/reducers';

export const sagaReducers = combineReducers({
  booking: bookingReducer,
});
