import { axiosInstance } from 'src/services/axiosInstance';
import { SiteUrl } from 'src/types/app.types';
import { Authentication } from '../authentication/types';
import { Appointment, Technician } from './types';

export const getAPITechnicians = (action: Authentication) => {
  return axiosInstance.get<{ technicians: Technician[] }>(
    action.url + `/api/technician-list?api_token=${action.api_token}`
  );
};

export const getAPIAppointmentsOfTech = (
  action: Authentication & { date: string; technicianId: string }
) => {
  return axiosInstance.get<{ appointments: Appointment[]; date?: string | null }>(
    action.url +
      `/api/technicians/${action.technicianId}/appointments?api_token=${action.api_token}&date=${action.date}`
  );
};
