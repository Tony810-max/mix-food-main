'use client';

import { ROUTES } from '@/lib/routes';
import { Button } from '@heroui/react';
import { useRouter } from 'next-nprogress-bar';
import React from 'react';

const LandingPage = () => {
  const router = useRouter();

  return (
    <div>
      LandingPage
      <Button variant='solid' color='primary' onPress={() => router.push(ROUTES.BOOKING_PAGE)}>
        chuyen trang
      </Button>
    </div>
  );
};

export default LandingPage;
