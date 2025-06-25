import CardFood from '@/components/CardFood';
import React from 'react';
import { products } from '../../utils/const';

const CarouselCardFood = () => {
  return (
    <div className='grid grid-cols-2 gap-4 md:grid-cols-4 '>
      {products.map((product, idx) => (
        <div className='flex h-full w-full transform transition-all duration-500 ease-in-out ' key={idx}>
          <CardFood index={idx} {...product} />
        </div>
      ))}
    </div>
  );
};

export default CarouselCardFood;
