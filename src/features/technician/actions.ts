/**
 * The event send to the store
 */

import { createAction } from '@reduxjs/toolkit';
import { SiteUrl } from 'src/types/app.types';
import { Authentication } from '../authentication/types';
import { Appointment, AppointmentsOfTech, Technician } from './types';

export const getTechnicians = createAction<Authentication>('get/technicians');
export const getTechniciansSuccess = createAction<Technician[]>('get/technicians_success');
export const getTechniciansError = createAction<void>('get/technicians_error');

export const getAppointmentsOfTech = createAction<AppointmentsOfTech>(
  'get/technicians/appointments'
);
export const getAppointmentsOfTechSuccess = createAction<{
  technicianId: string;
  appointments: Appointment[] | null;
  date: string;
}>('get/technicians/appointments_success');
export const getAppointmentsOfTechError = createAction<void>('get/technicians/appointments_error');
