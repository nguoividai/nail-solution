import { axiosInstance } from 'src/services/axiosInstance';
import { SiteUrl } from 'src/types/app.types';
import { Appointment, Technician } from './types';

export const getAPITechnicians = (action: SiteUrl) => {
  return axiosInstance.get<{ technicians: Technician[] }>(
    action.site_url + 'api/technician-list?api_token=yQMdMX6D4MeRgvR6zDRtCBAvfFixJxpL'
  );
};

export const getAPIAppointmentsOfTech = (
  action: SiteUrl & { date: string; technicianId: string }
) => {
  return axiosInstance.get<{ appointments: Appointment[]; date?: string | null }>(
    action.site_url +
      `api/technicians/${action.technicianId}/appointments?api_token=yQMdMX6D4MeRgvR6zDRtCBAvfFixJxpL&date=${action.date}`
  );
};
