/**
 * The event send to the store
 */

import { createAction } from '@reduxjs/toolkit';
import { BookingForm } from './types';

export const setBookingForm = createAction<BookingForm>('booking/set-form');
