/**
 * For process asynchronous
 * The pure functions to get current state, work the action and return new a state
 */

import { createReducer } from '@reduxjs/toolkit';
import { setBookingForm } from './actions';
import { getMaxStep } from './helpers';
import { BookingReducer } from './types';

const initialState: BookingReducer = {
  bookingForm: {
    maxStep: 0,
  },
};

export const bookingReducer = createReducer(initialState, (builder) => {
  builder
    .addCase(setBookingForm, (state, action) => {
      state.bookingForm = {
        ...state.bookingForm,
        ...action.payload,
        maxStep: getMaxStep(state.bookingForm?.maxStep, action.payload?.step),
      };
    })
    .addDefaultCase((state, action) => {});
});
