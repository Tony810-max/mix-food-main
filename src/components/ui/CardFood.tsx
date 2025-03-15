'use client';

import clsx from 'clsx';
import { motion } from 'framer-motion';
import Image from 'next/image';
import type { FC, HTMLAttributes } from 'react';

export interface ICardFoodProps extends Pick<HTMLAttributes<HTMLDivElement>, 'className' | 'onClick'> {
  index: number;
  img: string;
  title: string;
  description: string;
}

const CardFood: FC<ICardFoodProps> = ({ description, img, title, className, index, ...props }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: -50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.3, delay: 0 + index * 0.3 }}
      className={clsx('space-y-1 rounded-[.75rem] bg-primary p-2.5', className)}
      {...props}
    >
      <div className='relative aspect-[3/2] overflow-hidden rounded-[.5rem]'>
        <Image src={img} alt='food' fill unoptimized priority className='object-cover' />
      </div>
      <div className='flex flex-col gap-1'>
        <span className='line-clamp-1 font-bold text-lg text-white'>{title}</span>
        <span className='line-clamp-3 text-sm text-white'>{description}</span>
      </div>
    </motion.div>
  );
};

export default CardFood;
