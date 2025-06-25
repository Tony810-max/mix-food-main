'use client';
import Heading from '@/components/Heading';
import React from 'react';
import { categories } from '../../utils/const';
import CarouselCardFood from './CarouselCardFood';
import TabFoodMenu from './TabFoodMenu';

const ContentMenu = () => {
  const [selectedCategory, setSelectedCategory] = React.useState(categories[0].id);

  return (
    <div className='container mx-auto py-12'>
      <TabFoodMenu categories={categories} selectedCategory={selectedCategory} onSelectCategory={setSelectedCategory} />
      <Heading title={categories.find((c) => c.id === selectedCategory)?.name || ''} className='py-4' />
      <CarouselCardFood />
    </div>
  );
};

export default ContentMenu;
