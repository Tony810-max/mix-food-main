'use client';

import clsx from 'clsx';
import { motion } from 'framer-motion';
import { Clock } from 'lucide-react';
import Image from 'next/image';
import type { FC, HTMLAttributes } from 'react';

export interface ICardFoodProps extends Pick<HTMLAttributes<HTMLDivElement>, 'className' | 'onClick'> {
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
    <motion.div
      initial={{ opacity: 0, y: -50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.3, delay: 0 + (index || 1) * 0.3 }}
      className={clsx(
        'group hover:-translate-y-1 space-y-3 rounded-xl bg-white p-3 shadow-md transition-transform duration-300 hover:shadow-lg',
        className
      )}
      {...props}
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
    </motion.div>
  );
};

export default CardFood;
