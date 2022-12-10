/**
 * The event send to the store
 */

import { createAction } from '@reduxjs/toolkit';
import { SiteUrl } from 'src/types/app.types';
import { Service } from './types';

export const getServices = createAction<SiteUrl>('get/services');
export const getServicesSuccess = createAction<Service[]>('get/services_success');
export const getServicesError = createAction<void>('get/services_error');
