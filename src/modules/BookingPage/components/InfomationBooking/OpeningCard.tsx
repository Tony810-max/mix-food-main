import { IconList } from '@/assets/icons';
import React from 'react';

const OpeningCard = () => {
  return (
    <div className='rounded-md border bg-white px-4 py-5 shadow-md'>
      <div className='flex items-center gap-2 py-4'>
        <IconList.Clock size={24} color='var(--primary-color)' />
        <h2 className='font-bold'>Opening Hours</h2>
      </div>
      <div className='flex flex-col gap-2'>
        <p>Monday - Sunday: 9:00 - 22:00 </p>
      </div>
    </div>
  );
};

export default OpeningCard;
