'use client';
import { Button } from '@heroui/react';
import React from 'react';

const FormNewsLetter = () => {
  return (
    <form className='flex flex-row items-center gap-2 py-4 md:flex-col md:items-start'>
      <div className='flex-1'>
        <input
          placeholder='Your email'
          className='w-full rounded-md border px-4 py-2 focus:outline-none focus:ring-2 focus:ring-primary'
        />
      </div>
      <Button radius='sm' color='primary'>
        Subscribe
      </Button>
    </form>
  );
};

export default FormNewsLetter;
