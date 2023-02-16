/**
 * For process asynchronous
 * The pure functions to get current state, work the action and return new a state
 */

import { createReducer } from '@reduxjs/toolkit';
import { getAuthentication, getAuthenticationError, getAuthenticationSuccess } from './actions';
import { AuthenticationReducer } from './types';

const initialState: AuthenticationReducer = {};

export const authenticationReducer = createReducer(initialState, (builder) => {
  builder
    .addCase(getAuthentication, (state, action) => {
      state.ui = { loading: true };
    })
    .addCase(getAuthenticationSuccess, (state, action) => {
      state.ui = { loading: false };
      state.auth = action.payload;
    })
    .addCase(getAuthenticationError, (state, action) => {
      state.ui = { loading: false };
    });
});
