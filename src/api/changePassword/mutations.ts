import type { UseMutationOptions } from '@tanstack/react-query';
import { useMutation } from '@tanstack/react-query';
import type { AxiosError } from 'axios';

export const useForgotPasswordMutation = (
  options?: UseMutationOptions<ForgotPasswordResponse, AxiosError, IForgotPasswordBody>
) => {
  return useMutation({ mutationFn: forgotPasswordRequest, ...options });
};
