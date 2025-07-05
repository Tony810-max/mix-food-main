import type { UseMutationOptions } from '@tanstack/react-query';
import { useMutation } from '@tanstack/react-query';
import type { AxiosError } from 'axios';
import { signInRequest, signUpRequest } from './requests';
import type { SignInBody, SignInResponse, SignUpBody, SignUpResponse } from './types';

export const useSignUpMutation = (options?: UseMutationOptions<SignUpResponse, AxiosError, SignUpBody>) => {
  return useMutation({ mutationFn: signUpRequest, ...options });
};

export const useSignInMutation = (options?: UseMutationOptions<SignInResponse, AxiosError, SignInBody>) => {
  return useMutation({ mutationFn: signInRequest, ...options });
};
