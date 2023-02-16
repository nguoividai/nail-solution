/**
 * declare types for typescript
 */

export interface Shop {
  id: string;
  name: string;
  datetime?: string | null;
  numberphone?: string | null;
  smsphone?: string | null;
  website_url?: string | null;
  social_username?: string | null;
  review_link?: string | null;
  email?: string | null;
  email_send?: string | null;
  email_receive?: string | null;
  require_employee_password?: string | null;
  address?: string | null;
  logo?: string | null;
  ip1?: string | null;
  ip2?: string | null;
  carrier?: string | null;
  carrier_sms?: string | null;
  phone_sms_carrier?: string | null;
  deleted_at?: string | null;
  created_at?: string | null;
  updated_at?: string | null;
  is_print_draft?: number | null;
}

export interface ShopReducer {
  ui?: {
    loadingBtn?: boolean;
    loading?: boolean;
    visible?: boolean;
  };
  shop?: Shop;
}
