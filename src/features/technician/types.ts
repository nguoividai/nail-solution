/**
 * declare types for typescript
 */

import { SiteUrl } from 'src/types/app.types';

export interface Technician {
  adminid: string;
  name?: string;
  realname?: string;
  avatar?: string;
  ssn?: string;
  email?: string;
  birthday?: string;
  address?: string;
  hireday?: string;
  permisson?: string;
  isShowInFriendlyPOS?: boolean;
  type?: string;
  status?: number;
  appointment_version?: number;
  pax_api_key?: string;
  availability?: string;
  color?: string;
  is_receive_email?: boolean;
  is_receive_sms?: boolean;
  carrier?: string;
  carrier_sms?: string;
  phone_sms_carrier?: string;
  order_number_friendlyPOS?: number;
  token?: number;
  is_hide?: boolean;
  salary_day?: string;
  tip_charge_fee?: string;
  pattern_lock?: string;
  deleted_at?: string;
  created_at?: string;
  updated_at?: string;
}

export interface Appointment {
  title?: string;
  start_time?: string;
  end_time?: string;
}

export interface TechnicianReducer {
  ui?: {
    loadingBtn?: boolean;
    loading?: boolean;
    visible?: boolean;
  };
  technicians?: Technician[];
  technician?: {
    [technicianId: string]: {
      [date: string]: {
        appointments: Appointment[] | null;
      };
    };
  };
}

export type AppointmentsOfTech = SiteUrl & {
  technicianId: string;
  date: string;
};
