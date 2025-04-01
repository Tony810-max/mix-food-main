'use client';
import Banner from '@/components/Banner';
import { ROUTES } from '@/lib/routes';
import { Button } from '@heroui/react';
import Link from 'next/link';
import React from 'react';

const BannerLocations = () => {
  return (
    <Banner image='/images/menuPage/banner-menu-page.webp'>
      <div className='space-y-4'>
        <div className='mb-2 flex items-center gap-2'>
          <h1 className='font-bold text-3xl text-white drop-shadow-md md:text-5xl'>Mix Food Thai Restaurant</h1>
        </div>
        <p className='max-w-xl text-lg text-white/90 drop-shadow-md md:text-xl'>
          Authentic Thai flavors with fresh ingredients and traditional recipes
        </p>
        <div className='space-x-4'>
          <Button as={Link} href={ROUTES?.MENU} color='primary' variant='shadow' radius='sm'>
            View Menu
          </Button>
          <Button as={Link} href={ROUTES?.BOOK} variant='shadow' radius='sm'>
            Book a table
          </Button>
        </div>
      </div>
    </Banner>
  );
};

export default BannerLocations;
