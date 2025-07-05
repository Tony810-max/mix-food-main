import type { TResponse } from '@/types/common';

//body
export interface BookingBody {
  fullname: string;
  email: string;
  phoneNumber: string;
  bookingDateTime: string;
  numberOfGuests: number;
  note: string | undefined;
}

//data
export interface BookingData {
  fullname: string;
  email: string;
  phoneNumber: string;
  bookingDateTime: string;
  numberOfGuests: number;
  note: string;
  createdAt: string;
  updatedAt: string;
  deletedAt: string | null;
  id: number;
  status: string;
}

//response
export interface BookingResponse extends TResponse<BookingData> {}
