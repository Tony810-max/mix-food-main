'use client';
import Image from 'next/image';
import type { FC } from 'react';
import { MotionEffect } from './animate-ui/effects/motion-effect';
import { Badge } from './ui/badge';

export interface ICardFoodProps {
  index?: number;
  img: string;
  title: string;
  description?: string;
  category: string;
  price: string | number;
}

const CardFood: FC<ICardFoodProps> = ({ description, img, title, index, category, price }) => {
  return (
    <MotionEffect
      slide={{
        direction: 'left',
      }}
      fade
      inView
      delay={(index || 0.1) * 0.5}
      className='space-y-2 overflow-hidden rounded-lg shadow-lg'
    >
      <div className='relative aspect-[3/2]'>
        <Badge variant={'secondary'} className='absolute top-2 left-2 z-10 text-black'>
          {category}
        </Badge>
        <Image
          src={img}
          alt='food'
          fill
          unoptimized
          priority
          className='object-cover transition-transform duration-300 group-hover:scale-105'
        />
      </div>
      <div className='flex flex-col gap-2 p-4'>
        <span className='gray-900 font-bold text-2xl '>{title}</span>
        {description && <span className='line-clamp-1 text-gray-600 text-sm'>{description}</span>}
        <span className='font-bold text-primary text-xl'>
          {Number(price).toLocaleString('vi', { style: 'currency', currency: 'VND' })}
        </span>
      </div>
    </MotionEffect>
  );
};

export default CardFood;
