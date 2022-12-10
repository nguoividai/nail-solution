/**
 * The event send to the store
 */

import { createAction } from '@reduxjs/toolkit';
import { SiteUrl } from 'src/types/app.types';
import { Technician } from './types';

export const getTechnicians = createAction<SiteUrl>('get/technicians');
export const getTechniciansSuccess = createAction<Technician[]>('get/technicians_success');
export const getTechniciansError = createAction<void>('get/technicians_error');
