import { appConfig } from '.';

export type SiteConfig = typeof siteConfig;

export const siteConfig = {
  appUrl: appConfig.appUrl,
  name: 'Mix Food - Nhà Hàng Tốt Nhất Tại Đà Nẵng',
  metaTitle: 'Mix Food - Nhà Hàng Tốt Nhất Tại Đà Nẵng',
  description: 'Mix Food - Nhà Hàng Tốt Nhất Tại Đà Nẵng',
  keywords: [
    'món thái',
    'ẩm thực thái lan',
    'nhà hàng thái',
    'nhà hàng thái đà nẵng',
    'món thái đà nẵng',
    'ẩm thực đà nẵng',
    'nhà hàng đà nẵng',
    'thai food da nang',
    'thai restaurant da nang',
    'pad thai',
    'tom yum',
    'som tam',
    'mix food',
    'mix food da nang',
    'mix food đà nẵng',
  ],
  ogImage: {
    url: appConfig.appUrl,
    width: 1200,
    height: 630,
    alt: 'Mix Food - Nhà Hàng Tốt Nhất Tại Đà Nẵng',
  },
};
