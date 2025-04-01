'use client';
import Heading from '@/components/Heading';
import React from 'react';
import CarouselCardFood from './CarouselCardFood';
import TabFoodMenu from './TabFoodMenu';

const ContentMenu = () => {
  const [tab, setTab] = React.useState('');
  return (
    <div className='container mx-auto py-12'>
      <TabFoodMenu />
      <Heading title='Curries' className='py-4' />
      <CarouselCardFood />
    </div>
  );
};

export default ContentMenu;
