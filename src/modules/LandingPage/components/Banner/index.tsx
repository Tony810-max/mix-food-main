import Image from 'next/image';
import React from 'react';
import Heading from './Heading';
import SearchFood from './SearchFood';

const Banner = () => {
  return (
    <div className='relative py-4'>
      <div className='relative aspect-[2/1]'>
        <Image src={'/images/landingPage/banner.webp'} alt='img banner' fill priority unoptimized className='z-0' />
      </div>
      <div className='absolute flex flex-col items-center justify-center gap-8 text-white max-sm:top-0 max-sm:h-full max-sm:w-full sm:right-10 sm:bottom-10 sm:items-end sm:justify-normal'>
        <Heading />
        <SearchFood />
      </div>
    </div>
  );
};

export default Banner;
