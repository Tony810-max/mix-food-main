'use client';

import type { Locale } from '@/i18n/config';
import { setUserLocale } from '@/lib/locale';
import { useTransition } from 'react';

export const useCommonLocale = () => {
  const [isPending, startTransition] = useTransition();

  const handleChangeLocale = (value: Locale) => {
    startTransition(() => {
      try {
        setUserLocale(value);
      } catch (error) {}
    });
  };

  return {
    isPending,
    handleChangeLocale,
  };
};
