import type { TResponse } from '@/types/common';

export interface ChangePasswordBody {
  oldPassword: string;
  newPassword: string;
}

export interface ChangePasswordData {}

export interface ChangePasswordResponse extends TResponse<ChangePasswordData> {}
