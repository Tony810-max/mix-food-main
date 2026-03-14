'use client';
import type { IHeading } from '@/types/common';
import React from 'react';

const Heading: React.FC<IHeading> = ({ title, description }) => {
  return (
    <div className='flex flex-col py-10'>
      <h2 className='w-full text-left font-bold text-2xl sm:text-center sm:text-4xl '>{title}</h2>
      <p className='text-center text-xl'>{description}</p>
    </div>
  );
};

export default Heading;
