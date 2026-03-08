export const appConfig = {
  appUrl: process.env.NEXT_PUBLIC_APP_URL! ?? 'http://localhost:3000',
  apiUrl: process.env.NEXT_PUBLIC_API_URL! ?? 'http://localhost:3001',
  ogImage:
    process.env.NEXT_PUBLIC_OG_IMAGE! ??
    'https://raw.githubusercontent.com/Tony810-max/mix-food-main/refs/heads/main/public/images/landingPage/banner.webp',
};
