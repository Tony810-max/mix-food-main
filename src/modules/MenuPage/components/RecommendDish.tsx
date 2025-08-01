import CardFood from '@/components/CardFood';
import React from 'react';

const RecommendDish = () => {
  return (
    <div className='space-y-4'>
      <span className='font-semibold text-3xl text-primary'>Recommend Dish</span>
      <div className='grid grid-cols-3 gap-4'>
        <CardFood
          img='/images/menuPage/goitomthailan.webp'
          title='Goi Tom Thai Lan'
          category='Goi Tom'
          time='10-15 min'
          price='$12.99'
        />
      </div>
    </div>
  );
};

export default RecommendDish;
