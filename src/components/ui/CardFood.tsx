'use client';
import { Tooltip } from '@heroui/react';
import clsx from 'clsx';
import Image from 'next/image';
import React from 'react';

interface ICard {
  img: string;
  title: string;
  desr: string;
  className?: string;
}

const CardFood: React.FC<ICard> = ({ desr, img, title, className }) => {
  return (
    <div className={clsx('space-y-3 rounded-md', className)}>
      <div className='relative aspect-[3/2]'>
        <Image src={img} alt='img Feature' className='rounded-lg' fill unoptimized priority />
      </div>
      <div className='flex flex-col gap-1'>
        <span className='font-bold text-base'>{title}</span>
        <Tooltip content={<span className='inline-block max-w-52'>{desr}</span>}>
          <span className='line-clamp-2 text-primary text-sm lg:text-justify'>{desr}</span>
        </Tooltip>
      </div>
    </div>
  );
};

export default CardFood;
