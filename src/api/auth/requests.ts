import { env } from '@/utils/const';
import { request } from '../client';
import type { SignInBody, SignInResponse, SignUpBody, SignUpResponse } from './types';

export const signUpRequest = async (body: SignUpBody): Promise<SignUpResponse> => {
  const { data } = await request({
    method: 'POST',
    url: `/${env.API_VERSION}/auth/sign-up`,
    data: body,
  });

  return data;
};

export const signInRequest = async (body: SignInBody): Promise<SignInResponse> => {
  const { data } = await request({
    method: 'POST',
    url: `/${env.API_VERSION}/auth/login`,
    data: body,
  });

  return data;
};
