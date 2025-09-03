import React from 'react';
import CardBooking from './components/CardBooking';
import InfomationBooking from './components/InfomationBooking';

const BookingPage = () => {
  return (
    <div className='flex min-h-[calc(100vh-61.6px)] items-center px-4 py-2'>
      <div className='flex w-full flex-col justify-center gap-5 sm:flex-row'>
        <CardBooking />
        <InfomationBooking />
      </div>
    </div>
  );
};

export default BookingPage;
