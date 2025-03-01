import Image from 'next/image';
import React from 'react';

interface ICard {
  img: string;
  title: string;
  desr: string;
}

const CardFood: React.FC<ICard> = ({ desr, img, title }) => {
  return (
    <div className='space-y-3 rounded-md border border-primary p-4'>
      <div className='relative aspect-[3/2]'>
        <Image src={img} alt='img Feature' className='rounded-lg' fill unoptimized priority />
      </div>
      <div className='flex flex-col gap-1'>
        <span className='font-bold text-base'>{title}</span>
        <span className='line-clamp-3 text-primary text-sm'>{desr}</span>
      </div>
    </div>
  );
};

export default CardFood;
