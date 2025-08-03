import { useQuery } from '@tanstack/react-query';
import type { UseQueryOptions } from '@tanstack/react-query';
import type { AxiosError } from 'axios';
import { getUserMeRequest } from './request';
import type { IResponseUser } from './types';
import { USER_QUERY_KEY } from '../utils/const';

export const useGetUserMeQuery = (options?: Omit<UseQueryOptions<IResponseUser, AxiosError>, 'queryFn' | 'queryKey'>) =>
  useQuery({
    queryKey: [USER_QUERY_KEY],
    queryFn: () => getUserMeRequest(),
    ...options,
  });
