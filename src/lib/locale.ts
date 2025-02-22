'use server';

import type { Locale } from '@/i18n/config'; // Chỉ import như type
import { defaultLocale } from '@/i18n/config';
import { COOKIE_KEYS } from '@/utils/const';
import { cookies } from 'next/headers';

export async function getUserLocale() {
  return (await cookies()).get(COOKIE_KEYS.LOCALE)?.value || defaultLocale;
}

export async function setUserLocale(locale: Locale) {
  (await cookies()).set(COOKIE_KEYS.LOCALE, locale);
}
