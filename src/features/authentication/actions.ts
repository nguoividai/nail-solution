/**
 * The event send to the store
 */

import { createAction } from '@reduxjs/toolkit';
import { SiteUrl } from 'src/types/app.types';
import { Authentication } from './types';

export const getAuthentication = createAction<SiteUrl>('get/getAuthentication');
export const getAuthenticationSuccess = createAction<Authentication>(
  'get/getAuthentication/success'
);
export const getAuthenticationError = createAction<void>('get/getAuthentication/error');
