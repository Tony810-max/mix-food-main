import type { TResponse } from '@/types/common';

// Sign Up
export interface SignUpBody {
  email: string;
  phone: string;
  username: string;
  password: string;
}

export interface SignUpData {
  username: string;
  email: string;
  phone: string;
  password: string;
  createdAt: string;
  updatedAt: string;
  deletedAt: any;
  id: number;
  isActive: boolean;
  isVerified: boolean;
}

export interface SignUpResponse extends TResponse<SignUpData> {}

// Sign In
export interface SignInBody {
  phone: string;
  password: string;
}

export interface SignInData {
  user: IUser;
  tokens: ITokens;
}

export interface IUser {
  createdAt: string;
  updatedAt: string;
  deletedAt: any;
  id: number;
  username: string;
  email: string;
  phone: string;
  password: string;
  isActive: boolean;
  isVerified: boolean;
}

export interface ITokens {
  accessToken: string;
  refreshToken: string;
  expiresAt: number;
}

export interface SignInResponse extends TResponse<SignInData> {}
