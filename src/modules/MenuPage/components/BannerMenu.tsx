import { IconList } from '@/assets/icons';
import Image from 'next/image';
import React from 'react';

const BannerMenu = () => {
  return (
    <div className='relative aspect-square sm:aspect-[2/1] md:aspect-[3/1]'>
      <div className='absolute inset-0 z-10 bg-black/30' />
      <Image
        src={'/images/menuPage/banner-menu-page.webp'}
        alt='banner'
        fill
        priority
        unoptimized
        className='object-cover'
      />
      <div className='absolute inset-0 z-20 flex flex-col items-center justify-center text-center'>
        <div className='mb-2 flex items-center gap-2'>
          <IconList.utensils className='h-8 w-8 text-amber-400' />
          <h1 className='font-bold text-3xl text-white drop-shadow-md md:text-5xl'>Mix Food Thai Restaurant</h1>
        </div>
        <p className='max-w-xl text-lg text-white/90 drop-shadow-md md:text-xl'>
          Authentic Thai flavors with fresh ingredients and traditional recipes
        </p>
      </div>
    </div>
  );
};

export default BannerMenu;
