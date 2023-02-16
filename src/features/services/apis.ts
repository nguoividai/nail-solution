import { axiosInstance } from 'src/services/axiosInstance';
import { SiteUrl } from 'src/types/app.types';
import { Authentication } from '../authentication/types';
import { Service } from './types';

export const getAPIServices = (action: Authentication) => {
  return axiosInstance.get<{ services: Service[]; technician: object; workingHours: string[] }>(
    action.url + `/api/technicians/3039316418/services?api_token=${action.api_token}`
  );
};
