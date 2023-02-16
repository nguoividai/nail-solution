import { axiosInstance } from 'src/services/axiosInstance';
import { SiteUrl } from 'src/types/app.types';
import { Authentication } from './types';

export const getAuthenticationAPI = (action: SiteUrl) => {
  const { REACT_APP_HOST } = process.env;
  return axiosInstance.get<Authentication>(
    REACT_APP_HOST + `api/customers/${action.token}/auth-info`
  );
};
