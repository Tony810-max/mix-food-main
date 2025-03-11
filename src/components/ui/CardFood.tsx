'use client';
import type { ICard } from '@/types/common';
import clsx from 'clsx';
import { motion } from 'framer-motion';
import Image from 'next/image';
import React from 'react';

const CardFood: React.FC<ICard> = ({ desr, img, title, className, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: -50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, ease: 'easeInOut', delay: index * 0.25 }}
      className={clsx('space-y-3 rounded-3xl', className)}
    >
      <div className='relative aspect-[3/2]'>
        <Image src={img} alt='img Feature' className='rounded-lg' fill unoptimized priority />
      </div>
      <div className='flex flex-col gap-1'>
        <span className='font-bold text-base'>{title}</span>
        <span className='line-clamp-3 text-primary text-sm'>{desr}</span>
      </div>
    </motion.div>
  );
};

export default CardFood;
