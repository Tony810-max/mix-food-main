import type { TResponse } from '@/types/common';

export interface IForgotPasswordBody {
  email: string;
}

export interface ForgotPasswordData {
  data: string;
}

export interface ForgotPasswordResponse extends TResponse<ForgotPasswordData> {}
