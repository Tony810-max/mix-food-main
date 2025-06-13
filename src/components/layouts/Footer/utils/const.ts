import { ROUTES } from '@/lib/routes';
import type { INav } from '@/types/common';

export const getPrivacy = (t: (key: string) => string): INav[] => [
  {
    href: ROUTES?.LANDING_PAGE,
    label: t('PrivacyPolicy'),
  },
  {
    href: ROUTES?.LANDING_PAGE,
    label: t('TemsOfService'),
  },
];
