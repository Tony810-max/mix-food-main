import React, { type FC } from 'react';

export interface ICardFood {
  name: string;
  price: number;
  isSpicy: boolean;
  description: string;
}

const CardFood: FC<ICardFood> = ({ name, price, isSpicy, description }) => {
  return (
    <div className='rounded-lg border border-primary p-6'>
      <div className='flex items-center justify-between'>
        <span className='font-bold text-primary'>{name}</span>
        <div className='space-x-2'>
          {isSpicy && <span>🌶️</span>}
          <span className='font-bold text-primary'>
            {price.toLocaleString('it-IT', { style: 'currency', currency: 'VND' })}
          </span>
        </div>
      </div>
      <p className='py-2 text-lg'>{description}</p>
    </div>
  );
};

export default CardFood;
