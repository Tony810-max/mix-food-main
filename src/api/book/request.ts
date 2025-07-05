import { env } from '@/utils/const';
import { request } from '../client';
import type { BookingBody, BookingResponse } from './types';

export const bookingRequest = async (body: BookingBody): Promise<BookingResponse> => {
  const { data } = await request({
    method: 'POST',
    url: `/${env.API_VERSION}/bookings`,
    data: body,
  });

  return data;
};
