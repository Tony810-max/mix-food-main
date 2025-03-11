import { ROUTES } from '@/lib/routes';
import type { INAV } from '@/types/common';

export const getNav = (t: (key: string) => string): INAV[] => [
  {
    label: t('menu'),
    href: ROUTES?.LANDING_PAGE,
  },
  {
    label: t('offer'),
    href: ROUTES?.LANDING_PAGE,
  },
  {
    label: t('location'),
    href: ROUTES?.LANDING_PAGE,
  },
  {
    label: t('delivery'),
    href: ROUTES?.LANDING_PAGE,
  },
];
