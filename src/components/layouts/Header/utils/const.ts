import { ROUTES } from '@/lib/routes';
import type { INAV } from '@/types/common';

export const getNav = (t: (key: string) => string): INAV[] => [
  {
    label: t('menu'),
    href: ROUTES?.MENU,
  },
  {
    label: t('offer'),
    href: ROUTES?.OFFFER,
  },
  {
    label: t('location'),
    href: ROUTES?.LOCATION,
  },
  {
    label: t('delivery'),
    href: ROUTES?.DELIVERY,
  },
];
