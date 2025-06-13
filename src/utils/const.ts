import type { FC, PropsWithChildren } from 'react';

export const COOKIE_KEYS = {
  LOCALE: 'locale',
};

export type FCC<P = {}> = FC<PropsWithChildren<P>>;

export const env = {
  APP_URL: process.env.NEXT_PUBLIC_APP_URL!,
  API_URL: process.env.NEXT_PUBLIC_API_URL!,
  FACEBOOK_URL: process.env.NEXT_PUBLIC_FACEBOOK_URL!,
};
