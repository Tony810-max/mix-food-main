'use client';

import { env } from '@/utils/const';
import { HeroUIProvider } from '@heroui/system';
import { GoogleOAuthProvider } from '@react-oauth/google';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { AppProgressBar as ProgressBar } from 'next-nprogress-bar';
import { type ReactNode, useEffect, useState } from 'react';
import { Toaster } from 'sonner';

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
      refetchOnMount: false,
      staleTime: 5 * 1000,
      retry: false,
    },
  },
});

export interface ProvidersProps {
  children: ReactNode;
}

function Providers({ children }: ProvidersProps) {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  return (
    <HeroUIProvider>
      <QueryClientProvider client={queryClient}>
        <GoogleOAuthProvider clientId={env.GOOGLE_CLIENT_ID}>
          <Toaster position='top-right' />
          <ProgressBar height='4px' color='#fffd00' options={{ showSpinner: false }} shallowRouting />{' '}
          <>{isMounted ? children : <></>}</>
          <ReactQueryDevtools buttonPosition='bottom-left' initialIsOpen={false} />
        </GoogleOAuthProvider>
      </QueryClientProvider>
    </HeroUIProvider>
  );
}

export default Providers;
