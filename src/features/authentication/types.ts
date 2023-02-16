/**
 * declare types for typescript
 */

export interface Authentication {
  url: string;
  api_token: string;
}

export interface AuthenticationReducer {
  ui?: {
    loadingBtn?: boolean;
    loading?: boolean;
    visible?: boolean;
  };
  auth?: Authentication;
}
