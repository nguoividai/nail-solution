/**
 * declare types for typescript
 */

import { Service } from '../services/types';
import { Technician } from '../technician/types';

export interface BookingService {
  service_ids: string[];
  appointment_date: string;
  time_start: string;
  admin_id: string;
  phone: string;
  name: string;
}

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
