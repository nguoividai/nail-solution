import { combineReducers } from 'redux';
import { authenticationReducer } from './features/authentication/reducers';
import { bookingReducer } from './features/booking/reducers';
import { serviceReducer } from './features/services/reducers';
import { shopReducer } from './features/shop/reducers';
import { technicianReducer } from './features/technician/reducers';

export const sagaReducers = combineReducers({
  authentication: authenticationReducer,
  booking: bookingReducer,
  service: serviceReducer,
  technician: technicianReducer,
  shop: shopReducer,
});
