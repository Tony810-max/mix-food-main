import { ROUTES } from '@/lib/routes';

export interface INAV {
  label: string;
  href: string;
}

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
