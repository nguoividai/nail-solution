/**
 * declare types for typescript
 */

import { Service } from '../services/types';

export interface BookingForm {
  step?: number;
  maxStep?: number;
  staff?: string;
  services?: Service[];
  time?: string;
  info?: {
    phoneNumber?: string;
    name?: string;
    note?: string;
  };
}

export interface BookingReducer {
  ui?: {
    loadingBtn?: boolean;
  };
  bookingForm?: BookingForm;
}
