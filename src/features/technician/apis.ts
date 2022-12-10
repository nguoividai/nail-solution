import { axiosInstance } from 'src/services/axiosInstance';
import { SiteUrl } from 'src/types/app.types';
import { Technician } from './types';

export const getAPITechnicians = (action: SiteUrl) => {
  return axiosInstance.get<{ technicians: Technician[] }>(
    action.site_url + 'api/technician-list?api_token=yQMdMX6D4MeRgvR6zDRtCBAvfFixJxpL'
  );
};
