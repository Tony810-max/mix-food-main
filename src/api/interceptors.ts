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

import { refreshTokenRequest } from '@/api/auth/requests';

// Extend config type to allow _retry
interface RetryAxiosRequestConfig extends InternalAxiosRequestConfig {
  _retry?: boolean;
}

export const errorInterceptor = async (error: AxiosError): Promise<any> => {
  const originalRequest = error.config as RetryAxiosRequestConfig;
  const data = error?.response?.data as any;
  const meta = data?.meta;
  const statusCode = error?.response?.status;
  const userStore = useUserStore.getState();

  // Nếu token hết hạn (401) và chưa thử refresh
  if (statusCode === 401 && !originalRequest._retry) {
    originalRequest._retry = true;
    try {
      const res = await refreshTokenRequest();
      const { accessToken, refreshToken, user } = res?.tokens || res;
      userStore.setAccessToken(accessToken);
      userStore.setRefreshToken(refreshToken);
      if (user) userStore.setUser(user);
      // Gán lại header Authorization
      originalRequest.headers['Authorization'] = `Bearer ${accessToken}`;
      // Gửi lại request gốc với token mới
      return await (window as any).axios(originalRequest);
    } catch (refreshError) {
      userStore.logout();
      return Promise.reject(refreshError);
    }
  }

  return Promise.reject(meta || data || error);
};
