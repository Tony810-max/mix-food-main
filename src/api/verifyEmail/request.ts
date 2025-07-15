import { env } from '@/utils/const';
import type { AxiosResponse } from 'axios';
import { request } from '../client';
import type { VerifyEmailBody, VerifyEmailResponse } from './types';

export const verifyEmailRequest = async (body: VerifyEmailBody): Promise<AxiosResponse<VerifyEmailResponse>> => {
  const response = await request.post(`/${env.API_VERSION}/user/verify-account`, body);

  return response;
};

export const verifyEmailResendRequest = async () => {
  const { data } = await request.get(`/${env.API_VERSION}/user/send-verify-code`, {});

  return data;
};
