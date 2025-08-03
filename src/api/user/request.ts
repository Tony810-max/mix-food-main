import { env } from '@/utils/const';
import { request } from '../client';

export const getUserMeRequest = async () => {
  const { data } = await request.get(`/${env.API_VERSION}/user/me`, {});

  return data;
};
