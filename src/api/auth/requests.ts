import { env } from '@/utils/const';
import axios from 'axios';
import { request } from '../client';
import type { SignInBody, SignInResponse, SignUpBody, SignUpResponse } from './types';

export const signUpRequest = async (body: SignUpBody): Promise<SignUpResponse> => {
  const { data } = await request.post(`/${env.API_VERSION}/auth/sign-up`, body);

  return data;
};

export const signInRequest = async (body: SignInBody): Promise<SignInResponse> => {
  const { data } = await request.post(`/${env.API_VERSION}/auth/login`, body);

  return data;
};

export const refreshTokenRequest = async () => {
  const { data } = await axios.get(`/${env.API_VERSION}/auth/refresh-token`, {
    headers: {
      Authorization: `Bearer ${localStorage.getItem('refreshToken')}`,
    },
  });
  return data;
};
