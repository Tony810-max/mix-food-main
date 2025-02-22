import type { FC, PropsWithChildren } from 'react';

export const COOKIE_KEYS = {
  LOCALE: 'locale',
};

export type FCC<P = {}> = FC<PropsWithChildren<P>>;
