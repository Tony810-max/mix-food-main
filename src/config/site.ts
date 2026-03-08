import { appConfig } from '.';

export type SiteConfig = typeof siteConfig;

export const siteConfig = {
  appUrl: appConfig.appUrl,
  name: 'Mix Food - The best food in the Da Nang area',
  metaTitle: 'Mix Food - The best food in the Da Nang area',
  description: 'Mix Food - The best food in the Da Nang area',
  ogImage: appConfig.appUrl,
};
