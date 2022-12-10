import axios, { AxiosRequestConfig } from 'axios';

const config: AxiosRequestConfig = {
  headers: {
    'Content-Type': 'application/json',
  },
};

export const axiosInstance = axios.create(config);
