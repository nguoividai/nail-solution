/**
 * The event send to the store
 */

import { createAction } from '@reduxjs/toolkit';
import { Authentication } from '../authentication/types';
import { Shop } from './types';

export const getBusiness = createAction<Authentication>('get/getBusiness');
export const getBusinessSuccess = createAction<Shop>('get/getBusiness/success');
export const getBusinessError = createAction('get/getBusiness/error');
