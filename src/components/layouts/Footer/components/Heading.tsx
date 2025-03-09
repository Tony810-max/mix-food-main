import type { IHeading } from '@/types/common';
import React from 'react';

const Heading: React.FC<IHeading> = ({ title }) => {
  return <span className='mb-4 block font-bold text-lg text-primary'>{title}</span>;
};

export default Heading;
