/**
 * For process asynchronous
 * The pure functions to get current state, work the action and return new a state
 */

import { createReducer } from '@reduxjs/toolkit';
import { getServices, getServicesError, getServicesSuccess } from './actions';
import { ServiceReducer } from './types';

const initialState: ServiceReducer = {};

export const serviceReducer = createReducer(initialState, (builder) => {
  builder
    .addCase(getServices, (state, action) => {
      state.ui = { loading: true };
    })
    .addCase(getServicesSuccess, (state, action) => {
      state.ui = { loading: false };
      state.services = action.payload;
    })
    .addCase(getServicesError, (state, action) => {
      state.ui = { loading: false };
    })
    .addDefaultCase((state, action) => {});
});
