import { siteConfig } from '@/config/site';
import { ROUTES } from '@/lib/routes';
import type { MetadataRoute } from 'next';

const priorities: Record<string, number> = {
  [ROUTES.LANDING_PAGE]: 1,
  [ROUTES.MENU]: 0.9,
  [ROUTES.BOOK]: 0.8,
  [ROUTES.OFFER]: 0.7,
  [ROUTES.LOCATION]: 0.7,
  [ROUTES.DELIVERY]: 0.7,
  [ROUTES.ABOUT]: 0.6,
};

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  try {
    const privateRoutes = Object.values(ROUTES).filter(
      (route) => route !== ROUTES.PROFILE && route !== ROUTES.FACEBOOK
    );
    const staticPages: MetadataRoute.Sitemap = privateRoutes.map((route) => ({
      url: `${siteConfig.appUrl}${route}`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: priorities[route] ?? 0.5,
    }));

    return staticPages;
  } catch (err) {
    return [];
  }
}
