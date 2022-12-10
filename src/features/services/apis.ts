import { axiosInstance } from 'src/services/axiosInstance';
import { SiteUrl } from 'src/types/app.types';
import { Service } from './types';

export const getAPIServices = (action: SiteUrl) => {
  return axiosInstance.get<{ services: Service[]; technician: object; workingHours: string[] }>(
    action.site_url +
      'api/technicians/3039316418/services?api_token=yQMdMX6D4MeRgvR6zDRtCBAvfFixJxpL'
  );
};
