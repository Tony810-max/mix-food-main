import axios, { type AxiosInstance, type AxiosRequestConfig } from 'axios';

import { appConfig } from '@/config';
import { errorInterceptor, requestInterceptor, successInterceptor } from './interceptors';

const axiosRequestConfig: AxiosRequestConfig = {
  baseURL: appConfig.apiUrl + '/api',
  responseType: 'json',
};

export const request: AxiosInstance = axios.create(axiosRequestConfig);

request.interceptors.request.use(requestInterceptor);
request.interceptors.response.use(successInterceptor, errorInterceptor);
