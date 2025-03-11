import type { IIconLabel } from '@/types/common';
import React from 'react';

const IconLabel: React.FC<IIconLabel> = ({ Icon, label }) => {
  return (
    <div className='flex gap-2'>
      <Icon className='flex-shrink-0' color='var(--primary-color)' />
      <span className='text-white'>{label}</span>
    </div>
  );
};

export default IconLabel;
