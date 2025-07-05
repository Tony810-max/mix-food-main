import type { UseMutationOptions } from '@tanstack/react-query';
import { useMutation } from '@tanstack/react-query';
import type { AxiosError } from 'axios';
import { bookingRequest } from './request';
import type { BookingBody, BookingResponse } from './types';

export const useBookingMutation = (options?: UseMutationOptions<BookingResponse, AxiosError, BookingBody>) => {
  return useMutation({ mutationFn: bookingRequest, ...options });
};
