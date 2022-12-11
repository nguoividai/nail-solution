/**
 * For process asynchronous
 * The pure functions to get current state, work the action and return new a state
 */

import { createReducer, isAnyOf } from '@reduxjs/toolkit';
import {
  getAppointmentsOfTech,
  getAppointmentsOfTechError,
  getAppointmentsOfTechSuccess,
  getTechnicians,
  getTechniciansError,
  getTechniciansSuccess,
} from './actions';
import { TechnicianReducer } from './types';

const initialState: TechnicianReducer = {};

export const technicianReducer = createReducer(initialState, (builder) => {
  builder
    .addCase(getTechniciansSuccess, (state, action) => {
      state.ui = { loading: false };
      state.technicians = action.payload;
    })
    .addCase(getAppointmentsOfTechSuccess, (state, action) => {
      if (state.technician?.[action.payload.technicianId]) {
        if (!state.technician?.[action.payload.technicianId]?.[action.payload.date]) {
          state.technician[action.payload.technicianId][action.payload.date] = {
            appointments: action.payload.appointments,
          };
        }
      } else {
        state.technician = {
          ...state.technician,
          [action.payload.technicianId]: {
            [action.payload.date]: {
              appointments: action.payload.appointments,
            },
          },
        };
      }
      state.ui = { loading: false };
    })
    .addMatcher(isAnyOf(getTechnicians, getAppointmentsOfTech), (state, action) => {
      state.ui = { loading: true };
    })
    .addMatcher(isAnyOf(getTechniciansError, getAppointmentsOfTechError), (state, action) => {
      state.ui = { loading: false };
    })
    .addDefaultCase((state, action) => {});
});
