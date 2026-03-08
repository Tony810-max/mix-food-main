import { siteConfig } from '@/config/site';
import { ROUTES } from '@/lib/routes';
import type { MetadataRoute } from 'next';

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  try {
    const privateRoutes = Object.values(ROUTES).filter(
      (route) => route !== ROUTES.PROFILE && route !== ROUTES.FACEBOOK
    );
    const staticPages: MetadataRoute.Sitemap = privateRoutes.map((route) => ({
      url: `${siteConfig.appUrl}${route}`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 1,
    }));

    return staticPages;
  } catch (err) {
    return [];
  }
}
