'use client';

import clsx from 'clsx';
import { motion } from 'framer-motion';
import Image from 'next/image';
import type { FC, HTMLAttributes } from 'react';
import { Badge } from './ui/badge';

export interface ICardFoodProps extends Pick<HTMLAttributes<HTMLDivElement>, 'className' | 'onClick'> {
  index?: number;
  img: string;
  title: string;
  description?: string;
  category: string;
  price: string;
  isBestSeller: boolean;
}

const CardFood: FC<ICardFoodProps> = ({
  description,
  img,
  title,
  className,
  index,
  category,
  isBestSeller,
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
        <div className='flex items-center justify-between'>
          <span className='line-clamp-1 font-semibold text-gray-900 text-lg'>{title}</span>
          {isBestSeller && <Badge>Best Seller</Badge>}
        </div>
        {description && <span className='line-clamp-3 text-gray-600 text-sm'>{description}</span>}
        <span className='text-right font-bold text-base text-red-600'>{price}</span>
      </div>
    </motion.div>
  );
};

export default CardFood;
