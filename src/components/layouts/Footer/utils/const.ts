import { ROUTES } from '@/lib/routes';

interface IPrivacy {
  title: string;
  href: string;
}

export const getPrivacy = (t: (key: string) => string): IPrivacy[] => [
  {
    href: ROUTES?.LANDING_PAGE,
    title: t('PrivacyPolicy'),
  },
  {
    href: ROUTES?.LANDING_PAGE,
    title: t('TemsOfService'),
  },
  {
    href: ROUTES?.LANDING_PAGE,
    title: t('Sitemap'),
  },
];
