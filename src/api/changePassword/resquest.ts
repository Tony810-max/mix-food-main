import { env } from '@/utils/const';
import { request } from '../client';
import type { ChangePasswordBody } from './types';

export const changePasswordRequest = async (body: ChangePasswordBody): Promise<any> => {
  const { data } = await request.post(`/${env.API_VERSION}/user/change-password`, body);

  return data;
};
