import { ROUTES } from '@/lib/routes';
import type { INav } from '@/types/common';

export const navData = (t: (key: string) => string): INav[] => [
  {
    label: t('menu'),
    href: ROUTES?.MENU,
  },
  {
    label: t('book_table'),
    href: ROUTES?.BOOK,
  },
  {
    label: t('location'),
    href: ROUTES?.LOCATION,
  },
];
