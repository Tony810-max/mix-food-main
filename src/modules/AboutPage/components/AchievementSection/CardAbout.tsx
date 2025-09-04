import type { LucideIcon } from 'lucide-react';
import React from 'react';

export interface ICardAbout {
  title: string;
  description: string;
  Icon: LucideIcon;
}

const CardAbout: React.FC<ICardAbout> = ({ title, description, Icon }) => {
  return (
    <div className='flex flex-col items-center border p-6 shadow-md'>
      <div className='flex h-16 w-16 items-center justify-center rounded-full bg-gradient'>
        <Icon size={28} color='white' />
      </div>
      <div className='py-4'>
        <h3 className='text-center font-bold text-lg'>{title}</h3>
        <p className='text-center text-gray-500 text-sm'>{description}</p>
      </div>
    </div>
  );
};

export default CardAbout;
