/**
 * For process asynchronous
 * The pure functions to get current state, work the action and return new a state
 */

import { createReducer } from '@reduxjs/toolkit';
import { getBusiness, getBusinessError, getBusinessSuccess } from './actions';
import { ShopReducer } from './types';

const initialState: ShopReducer = {};

export const shopReducer = createReducer(initialState, (builder) => {
  builder
    .addCase(getBusiness, (state, action) => {
      state.ui = { loading: true };
    })
    .addCase(getBusinessSuccess, (state, action) => {
      state.ui = { loading: false };
      state.shop = action.payload;
    })
    .addCase(getBusinessError, (state, action) => {
      state.ui = { loading: false };
    });
});
