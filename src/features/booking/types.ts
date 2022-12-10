/**
 * declare types for typescript
 */

import { Service } from '../services/types';
import { Technician } from '../technician/types';

export interface BookingForm {
  step?: number;
  maxStep?: number;
  staff?: Technician;
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
