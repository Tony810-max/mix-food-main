import Image from 'next/image';
import React from 'react';
import HeadingBanner from './HeadingBanner';
import SearchFood from './SearchFood';

const BannerLandingPage = () => {
  return (
    <div className='relative h-[calc(100vh-60px)] text-white'>
      <Image
        src='/images/landingPage/banner.webp'
        alt='banner'
        fill
        priority
        unoptimized
        className='z-0 object-cover'
      />

      <div className='container relative z-10 mx-auto flex h-full flex-col items-center justify-center md:items-end md:justify-end'>
        <div className='space-y-8 pb-11'>
          <HeadingBanner />
          <SearchFood />
        </div>
      </div>
    </div>
  );
};

export default BannerLandingPage;
