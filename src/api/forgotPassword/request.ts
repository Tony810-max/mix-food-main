import { env } from '@/utils/const';
import { request } from '../client';
import type { ForgotPasswordResponse, IForgotPasswordBody } from './types';

export const forgotPasswordRequest = async (body: IForgotPasswordBody): Promise<ForgotPasswordResponse> => {
  const { data } = await request({
    method: 'POST',
    url: `/${env.API_VERSION}/user/forget-password`,
    data: body,
  });

  return data;
};
