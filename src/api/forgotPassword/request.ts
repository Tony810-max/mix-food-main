import { env } from '@/utils/const';
import { request } from '../client';
import type { ForgotPasswordResponse, IForgotPasswordBody } from './types';

export const forgotPasswordRequest = async (body: IForgotPasswordBody): Promise<ForgotPasswordResponse> => {
  const { data } = await request.post(`/${env.API_VERSION}/user/forget-password`, body);

  return data;
};
