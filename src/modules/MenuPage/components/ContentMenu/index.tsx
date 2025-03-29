'use client';
import React from 'react';
import CarouselCardFood from './CarouselCardFood';
import TabFoodMenu from './TabFoodMenu';

const ContentMenu = () => {
  const [tab, setTab] = React.useState('');
  return (
    <div className='container mx-auto py-12'>
      <TabFoodMenu />
      <p className='py-8 text-center font-semibold text-3xl text-primary capitalize'>Curries</p>
      <CarouselCardFood />
    </div>
  );
};

export default ContentMenu;
