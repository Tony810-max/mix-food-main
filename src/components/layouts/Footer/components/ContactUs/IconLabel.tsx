import type { LucideIcon } from 'lucide-react';
import React from 'react';

interface IIconLabel {
  Icon: LucideIcon;
  label: string;
}

const IconLabel: React.FC<IIconLabel> = ({ Icon, label }) => {
  return (
    <div className='flex items-center gap-2'>
      <Icon className='flex-shrink-0' color='var(--primary-color)' />
      <span>{label}</span>
    </div>
  );
};

export default IconLabel;
