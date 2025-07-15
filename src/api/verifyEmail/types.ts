import type { TResponse } from '@/types/common';

export interface VerifyEmailBody {
  code: string;
}

export interface VerifyEmailSendBodyData {
  message: string;
}

export interface VerifyEmailData {}

export interface VerifyEmailSendBodyResponse extends TResponse<VerifyEmailSendBodyData> {}

export interface VerifyEmailResponse extends TResponse<VerifyEmailData> {}
