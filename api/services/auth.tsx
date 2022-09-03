import apiClient from 'api/http-common';
import { LoginParams } from 'api/types/auth';

export const userLogin = (params: LoginParams) => {
  const { user, password: pass } = params;
  return apiClient.post('api/v1/login', { user, pass });
};
