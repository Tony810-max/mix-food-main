'use client';
import { Icons } from '@/assets/icons';
import Image from 'next/image';
import type { FC } from 'react';
import { MotionEffect } from './animate-ui/effects/motion-effect';
import { Badge } from './ui/badge';
import { Button } from './ui/button';

export interface ICardFoodProps {
  index?: number;
  img: string;
  title: string;
  description?: string;
  price: string | number;
  isBestSeller: boolean;
  isSpicy: boolean;
  isVegetarian: boolean;
}

const CardFood: FC<ICardFoodProps> = ({
  description,
  img,
  title,
  index,
  price,
  isBestSeller,
  isSpicy,
  isVegetarian,
}) => {
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
        <div className='absolute top-2 right-2 z-10 flex items-center gap-4'>
          {isBestSeller && (
            <Badge variant={'secondary'} className='space-x-1 bg-primary hover:bg-primary'>
              <Icons.Star size={16} color='white' fill='white' />
              <span className='capitalize'>Bán chạy</span>
            </Badge>
          )}
          {isSpicy && (
            <Badge variant={'secondary'} className='space-x-1 space-x-2 bg-primary hover:bg-primary'>
              🌶️ Cay
            </Badge>
          )}
          {isVegetarian && (
            <Badge variant={'secondary'} className='space-x-1 bg-primary hover:bg-primary'>
              <Icons.LeafyGreen size={16} color='green' fill='green' />
              <span className='capitalize'>món chay</span>
            </Badge>
          )}
        </div>
        <Image
          src={img}
          alt='food'
          fill
          unoptimized
          priority
          className=' transition-transform duration-200 hover:scale-x-110'
        />
      </div>
      <div className='flex flex-col gap-2 p-4'>
        <span className='gray-900 font-bold text-2xl '>{title}</span>
        {description && <span className='line-clamp-1 text-gray-600 text-sm'>{description}</span>}
        <div className='flex items-center justify-between'>
          <span className='font-bold text-primary text-xl'>
            {Number(price).toLocaleString('vi', { style: 'currency', currency: 'VND' })}
          </span>
          <Button>Đặt món</Button>
        </div>
      </div>
    </MotionEffect>
  );
};

export default CardFood;
