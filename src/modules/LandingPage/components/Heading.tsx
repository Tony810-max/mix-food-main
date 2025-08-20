'use client';
import type { IHeading } from '@/types/common';
import React from 'react';

const Heading: React.FC<IHeading> = ({ title, description }) => {
  return (
    <div className='mb-16 flex flex-col items-center justify-center '>
      <h2 className='font-bold text-4xl'>{title}</h2>
      <p className='text-center text-xl'>{description}</p>
    </div>
  );
};

export default Heading;
