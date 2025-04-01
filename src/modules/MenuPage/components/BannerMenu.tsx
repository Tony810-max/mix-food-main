import { IconList } from '@/assets/icons';
import Banner from '@/components/Banner';
import React from 'react';

const BannerMenu = () => {
  return (
    <Banner image='/images/menuPage/banner-menu-page.webp'>
      <div className='mb-2 flex items-center gap-2'>
        <IconList.utensils className='h-8 w-8 text-amber-400' />
        <span className='font-bold text-3xl text-white drop-shadow-md md:text-5xl'>Mix Food Thai Restaurant</span>
      </div>
      <p className='max-w-xl text-lg text-white/90 drop-shadow-md md:text-xl'>
        Authentic Thai flavors with fresh ingredients and traditional recipes
      </p>
    </Banner>
  );
};

export default BannerMenu;
