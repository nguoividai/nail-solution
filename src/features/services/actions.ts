/**
 * The event send to the store
 */

import { createAction } from '@reduxjs/toolkit';
import { Authentication } from '../authentication/types';
import { Service } from './types';

export const getServices = createAction<Authentication>('get/services');
export const getServicesSuccess = createAction<Service[]>('get/services_success');
export const getServicesError = createAction<void>('get/services_error');
