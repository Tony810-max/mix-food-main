import { useUserStore } from '@/stores/userStore';
import type { AxiosError, AxiosResponse, InternalAxiosRequestConfig } from 'axios';

export const requestInterceptor = (config: InternalAxiosRequestConfig): InternalAxiosRequestConfig => {
  const token = useUserStore.getState().accessToken;

  if (token) {
    config.headers.set('Authorization', `Bearer ${token}`);
  }

  return config;
};

export const successInterceptor = (response: AxiosResponse): AxiosResponse => {
  return response;
};

// TODO: refresh token
export const errorInterceptor = async (error: AxiosError): Promise<void> => {
  const originalRequest = error.config!;
  const data = error?.response?.data as any;
  const meta = data?.meta;
  const statusCode = error?.response?.status;
  return Promise.reject(meta || data || error);
};
