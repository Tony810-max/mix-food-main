import React from 'react';
import { FormBooking } from './FormBooking';

const CardBooking = () => {
  return (
    <div className='w-full max-w-4xl rounded-lg border bg-white p-8 shadow-md'>
      <h1 className='mb-8 text-center font-bold text-3xl text-primary'>Book Your Table</h1>
      <FormBooking />
    </div>
  );
};

export default CardBooking;
