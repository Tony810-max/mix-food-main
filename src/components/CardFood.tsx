'use client';

import { MotionEffect } from '@/components/animate-ui/effects/motion-effect';
import Image from 'next/image';
import type { FC } from 'react';

export interface ICardFoodProps {
  index?: number;
  img: string;
  title: string;
  description?: string;
  category: string;
  price: number | string;
}

const CardFood: FC<ICardFoodProps> = ({ description, img, title, index, category, price }) => {
  return (
    <MotionEffect
      slide={{
        direction: 'left',
      }}
      fade
      inView
      delay={0.5 + (index || 0.1) * 0.1}
      className='space-y-2'
    >
      <div className='relative aspect-[3/2] overflow-hidden rounded-lg'>
        <span className='absolute top-2 left-2 z-10 rounded-full bg-green-100 px-2 py-0.5 font-medium text-green-700 text-xs backdrop-blur-sm'>
          {category}
        </span>
        <Image
          src={img}
          alt='food'
          fill
          unoptimized
          priority
          className='object-cover transition-transform duration-300 group-hover:scale-105'
        />
      </div>
      <div className='flex flex-col gap-2'>
        <span className='font-semibold text-gray-900 text-lg'>{title}</span>
        {description && <span className='line-clamp-1 text-gray-600 text-sm'>{description}</span>}
        <span className='font-bold text-base text-red-600'>
          {Number(price).toLocaleString('vi', { style: 'currency', currency: 'VND' })}
        </span>
      </div>
    </MotionEffect>
  );
};

export default CardFood;
