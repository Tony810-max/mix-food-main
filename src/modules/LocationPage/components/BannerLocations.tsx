'use client';
import Banner from '@/components/Banner';
import { ROUTES } from '@/lib/routes';
import { Button } from '@heroui/react';
import Link from 'next/link';
import React from 'react';

const BannerLocations = () => {
  return (
    <Banner image='/images/menuPage/banner-menu-page.webp'>
      <div className='flex w-full flex-col items-center justify-center px-4 py-8 text-center md:py-16'>
        <h1 className='mb-3 animate-fade-in-up font-extrabold text-3xl text-white tracking-wide drop-shadow-lg md:text-5xl'>
          Mix Food Thai Restaurant
        </h1>
        <p className='mb-6 max-w-2xl animate-fade-in-up text-base text-white/90 drop-shadow-md delay-100 md:text-xl'>
          Authentic Thai flavors with fresh ingredients and traditional recipes
        </p>
        <div className='flex animate-fade-in-up flex-col justify-center gap-3 delay-200 sm:flex-row sm:gap-6'>
          <Button
            as={Link}
            href={ROUTES?.MENU}
            color='primary'
            variant='shadow'
            radius='sm'
            className='px-8 py-3 font-semibold text-base shadow-lg transition-transform hover:scale-105'
          >
            View Menu
          </Button>
          <Button
            as={Link}
            href={ROUTES?.BOOK}
            variant='shadow'
            radius='sm'
            className='px-8 py-3 font-semibold text-base shadow-lg transition-transform hover:scale-105'
          >
            Book a table
          </Button>
        </div>
      </div>
    </Banner>
  );
};

export default BannerLocations;
