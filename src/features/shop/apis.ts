import { axiosInstance } from 'src/services/axiosInstance';
import { Authentication } from '../authentication/types';
import { Shop } from './types';

export const getBusinessAPI = (action: Authentication) => {
  return axiosInstance.get<{ business: Shop }>(
    action.url + `/api/business-details?api_token=${action.api_token}`
  );
};
