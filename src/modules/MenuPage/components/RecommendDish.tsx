import CardFood from '@/components/CardFood';
import React from 'react';

import { DATA_MENU } from '../utils/const';

const RecommendDish = () => {
  return (
    <div className='space-y-4 py-4 sm:py-12'>
      <span className='font-semibold text-3xl text-primary'>Recommend Dish</span>
      <div className='grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3'>
        {DATA_MENU.map((item, index) => (
          <CardFood key={index} {...item} />
        ))}
      </div>
    </div>
  );
};

export default RecommendDish;
