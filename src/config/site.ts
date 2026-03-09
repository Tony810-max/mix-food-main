import { appConfig } from '.';

export type SiteConfig = typeof siteConfig;

export const siteConfig = {
  appUrl: appConfig.appUrl,
  name: 'Mix Food - Nhà Hàng Tốt Nhất Tại Đà Nẵng',
  metaTitle: 'Mix Food - Nhà Hàng Tốt Nhất Tại Đà Nẵng',
  description: 'Mix Food - Nhà Hàng Tốt Nhất Tại Đà Nẵng',
  ogImage: {
    url: appConfig.appUrl,
    width: 1200,
    height: 630,
    alt: 'Mix Food - Nhà Hàng Tốt Nhất Tại Đà Nẵng',
  },
};
