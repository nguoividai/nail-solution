/**
 * declare types for typescript
 */

export interface Service {
  serviceid?: number;
  categoryid?: number;
  servicename?: string;
  duration?: string;
  price?: number;
  turn?: number;
  point?: number;
  productCharge?: number;
  isShowInBookAppointment?: boolean;
  isShowInFriendlyPOS?: boolean;
  order_number_friendlyPOS?: number;
  deleted_at?: string;
  created_at?: string;
  updated_at?: string;
}

export interface ServiceReducer {
  ui?: {
    loadingBtn?: boolean;
    loading?: boolean;
    visible?: boolean;
  };
  services?: Service[];
}
