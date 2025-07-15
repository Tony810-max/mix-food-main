import type { UseMutationOptions } from '@tanstack/react-query';
import { useMutation } from '@tanstack/react-query';
import type { AxiosError, AxiosResponse } from 'axios';
import { verifyEmailRequest, verifyEmailResendRequest } from './request';
import type { VerifyEmailBody, VerifyEmailResponse } from './types';

export const useVerifyEmailResendMutation = (options?: UseMutationOptions<VerifyEmailResponse, AxiosError>) => {
  return useMutation({ mutationFn: verifyEmailResendRequest, ...options });
};

export const useVerifyEmailMutation = (
  options?: UseMutationOptions<AxiosResponse<VerifyEmailResponse>, AxiosError, VerifyEmailBody>
) => {
  return useMutation({ mutationFn: verifyEmailRequest, ...options });
};
