import Image from 'next/image';
import React from 'react';
import HeadingBanner from './HeadingBanner';
import SearchFood from './SearchFood';

const Banner = () => {
  return (
    <div className='relative'>
      <div className='relative aspect-[3/2] lg:aspect-auto lg:min-h-[calc(100vh-71.97px)]'>
        <Image src={'/images/landingPage/banner.webp'} alt='img banner' fill priority unoptimized />
      </div>
      <div className=' absolute flex flex-col items-center justify-center gap-8 text-white max-sm:top-0 max-sm:h-full max-sm:w-full sm:right-10 sm:bottom-10 sm:items-end sm:justify-normal'>
        <HeadingBanner />
        <SearchFood />
      </div>
    </div>
  );
};

export default Banner;
