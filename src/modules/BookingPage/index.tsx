import React from 'react';
import { BookingForm } from './components/BookingForm';

const BookingPage = () => {
  return (
    <div className='flex min-h-screen items-center bg-gradient-to-br from-gray-50 to-white'>
      <div className='container mx-auto'>
        <div className='mx-auto max-w-4xl rounded-lg bg-white p-8 shadow-lg'>
          <h1 className='mb-8 text-center font-bold text-3xl text-primary'>Book Your Table</h1>
          <BookingForm />
        </div>
      </div>
    </div>
  );
};

export default BookingPage;
