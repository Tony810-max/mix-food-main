import Image from 'next/image';
import React from 'react';
import ButtonsFood from './ButtonsFood';
import HeadingBanner from './HeadingBanner';

const BannerLandingPage = () => {
  return (
    <div className='relative h-[calc(100vh-60px)] text-white'>
      <div className='absolute inset-0 z-20 bg-black/50'></div>
      <Image
        src='/images/landingPage/banner.jpg'
        alt='banner'
        fill
        priority
        unoptimized
        className='z-10 object-cover'
      />

      <div className=' container relative z-30 flex h-full items-center justify-center'>
        <div className='space-y-8 pb-11'>
          <HeadingBanner />
          <ButtonsFood />
        </div>
      </div>
    </div>
  );
};

export default BannerLandingPage;
