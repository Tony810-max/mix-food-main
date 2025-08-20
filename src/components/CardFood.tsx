'use client';
import { Clock } from 'lucide-react';
import Image from 'next/image';
import type { FC } from 'react';

export interface ICardFoodProps {
  index?: number;
  img: string;
  title: string;
  description?: string;
  category: string;
  time: string;
  price: string;
}

const CardFood: FC<ICardFoodProps> = ({
  description,
  img,
  title,
  className,
  index,
  category,
  time,
  price,
  ...props
}) => {
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
      <div className='flex flex-col gap-1'>
        <span className='line-clamp-1 font-semibold text-gray-900 text-lg'>{title}</span>
        {description && <span className='line-clamp-3 text-gray-600 text-sm'>{description}</span>}
        <div className='mt-2 flex items-center justify-between'>
          <span className='flex items-center gap-1 text-gray-500 text-xs'>
            <Clock className='h-3.5 w-3.5' /> {time}
          </span>
          <span className='font-bold text-base text-red-600'>{price}</span>
        </div>
      </div>
    </MotionEffect>
  );
};

export default CardFood;
