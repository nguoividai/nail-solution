/**
 * For process asynchronous
 * The pure functions to get current state, work the action and return new a state
 */

import { createReducer } from '@reduxjs/toolkit';
import { getTechnicians, getTechniciansError, getTechniciansSuccess } from './actions';
import { TechnicianReducer } from './types';

const initialState: TechnicianReducer = {};

export const technicianReducer = createReducer(initialState, (builder) => {
  builder
    .addCase(getTechnicians, (state, action) => {
      state.ui = { loading: true };
    })
    .addCase(getTechniciansSuccess, (state, action) => {
      state.ui = { loading: false };
      state.technicians = action.payload;
    })
    .addCase(getTechniciansError, (state, action) => {
      state.ui = { loading: false };
    })
    .addDefaultCase((state, action) => {});
});
