import type { UseMutationOptions } from '@tanstack/react-query';
import { useMutation } from '@tanstack/react-query';
import type { AxiosError } from 'axios';
import { changePasswordRequest } from './resquest';
import type { ChangePasswordBody, ChangePasswordResponse } from './types';

export const useChangePasswordMutation = (
  options?: UseMutationOptions<ChangePasswordResponse, AxiosError, ChangePasswordBody>
) => {
  return useMutation({ mutationFn: changePasswordRequest, ...options });
};
