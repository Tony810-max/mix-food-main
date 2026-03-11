import { montserrat } from '@/assets/fonts';
import Footer from '@/components/layouts/Footer';
import Header from '@/components/layouts/Header';
import { siteConfig } from '@/config/site';
import { cn } from '@/lib/utils';
import { GoogleAnalytics } from '@next/third-parties/google';
import type { Metadata, Viewport } from 'next';
import { NextIntlClientProvider } from 'next-intl';
import { getLocale, getMessages } from 'next-intl/server';
import './globals.css';
import Providers from './providers';

export const metadata: Metadata = {
  verification: {
    google: 'your-google-verification-code',
  },
  metadataBase: new URL(siteConfig.appUrl),
  title: siteConfig.name,
  description: siteConfig.description,
  generator: 'Next.js',
  applicationName: siteConfig.name,
  referrer: 'origin-when-cross-origin',
  keywords: [],
  authors: [{ name: siteConfig.name }],
  creator: siteConfig.name,
  publisher: siteConfig.name,
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    images: [siteConfig.ogImage],
    description: siteConfig.description,
    title: {
      default: siteConfig.name,
      template: `${siteConfig.name} - %s`,
    },
  },
  icons: {
    icon: '/favicon.ico',
    shortcut: '/favicon-96x96.png',
    apple: '/apple-touch-icon.png',
  },
  twitter: {
    card: 'summary_large_image',
    title: siteConfig.name,
    description: siteConfig.description,
    images: [siteConfig.ogImage],
    creator: `@${siteConfig.name}`,
  },
};

export const viewport: Viewport = {
  width: 1,
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: 'white' },
    // { media: '(prefers-color-scheme: dark)', color: 'black' },
  ],
};

type RootLayoutProps = Readonly<{ children: React.ReactNode }>;

export default async function RootLayout({ children }: RootLayoutProps) {
  const locale = await getLocale();
  const messages = await getMessages();

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Restaurant',
    name: 'Mix Food',
    image: 'https://mix-food.io.vn/logo.png',
    '@id': 'https://mix-food.io.vn',
    url: 'https://mix-food.io.vn',
    telephone: '+84905473728',
    servesCuisine: 'Thai',
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Da Nang',
      addressCountry: 'VN',
    },
  };

  return (
    <html lang={locale}>
      <body suppressHydrationWarning className={cn('min-h-screen bg-background antialiased', montserrat.className)}>
        <script type='application/ld+json' dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
        <NextIntlClientProvider messages={messages}>
          <Providers>
            <Header />
            <main className='pt-[3.875rem]'>{children}</main>
            <Footer />
          </Providers>
        </NextIntlClientProvider>
        <GoogleAnalytics gaId='G-JNRMTW8GW0' />
      </body>
    </html>
  );
}
