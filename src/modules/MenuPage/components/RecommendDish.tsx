'use client';
import CardFood from '@/components/CardFood';
import React from 'react';

import Title from '@/components/title';
import { Button } from '@/components/ui/button';
import { DATA_MENU } from '../utils/const';

const RecommendDish = () => {
  const groupedMenu = DATA_MENU.reduce(
    (acc, item) => {
      if (!acc[item.category]) {
        acc[item.category] = [];
      }
      acc[item.category].push(item);
      return acc;
    },
    {} as Record<string, typeof DATA_MENU>
  );
  return (
    <div className='space-y-4 py-4 sm:py-12'>
      <Button
        onClick={() =>
          document.getElementById('goi-tom')?.scrollIntoView({
            behavior: 'smooth',
          })
        }
      >
        Xem thêm
      </Button>
      <div className='min-h-screen'>
        <Title title='Recommend Dish' />
        <div className='grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4'>
          {DATA_MENU.map((item, index) => item.isBestSeller && <CardFood key={index} {...item} />)}
        </div>
      </div>
      <div>
        {Object.entries(groupedMenu).map(([category, items]) => (
          <div key={category} id={category.toLowerCase().replaceAll(' ', '-')} className='scroll-mt-24'>
            <Title title={category} />
            <div className='grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4'>
              {items.map((item, index) => (
                <CardFood key={index} {...item} />
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RecommendDish;
