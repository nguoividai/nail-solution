/**
 * declare types for typescript
 */

export interface BookingForm {
  step?: number;
  maxStep?: number;
  staff?: string;
  services?: {
    id: number;
    name: string;
  }[];
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
