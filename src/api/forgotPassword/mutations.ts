import type { UseMutationOptions } from '@tanstack/react-query';
import { useMutation } from '@tanstack/react-query';
import type { AxiosError } from 'axios';
import { forgotPasswordRequest } from './request';
import type { ForgotPasswordResponse, IForgotPasswordBody } from './types';

export const useForgotPasswordMutation = (
  options?: UseMutationOptions<ForgotPasswordResponse, AxiosError, IForgotPasswordBody>
) => {
  return useMutation({ mutationFn: forgotPasswordRequest, ...options });
};
