import { ROUTES } from '@/lib/routes';
import type { INAV } from '@/types/common';

export const getPrivacy = (t: (key: string) => string): INAV[] => [
  {
    href: ROUTES?.LANDING_PAGE,
    label: t('PrivacyPolicy'),
  },
  {
    href: ROUTES?.LANDING_PAGE,
    label: t('TemsOfService'),
  },
];
