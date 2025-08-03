import type { TResponse } from '@/types/common';

export interface IUSer {
  createdAt: string;
  id: number;
  username: string;
  email: string;
  phone: string;
  isActive: boolean;
  isVerified: boolean;
}

export interface IDataUser {
  user: IUSer;
}

export interface IResponseUser extends TResponse<IDataUser> {}
