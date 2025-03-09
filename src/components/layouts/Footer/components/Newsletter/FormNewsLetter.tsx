'use client';
import { Button } from '@heroui/react';
import React from 'react';

const FormNewsLetter = () => {
  return (
    <form className='flex flex-row items-center gap-2 py-4 max-xl:flex-col max-xl:items-start'>
      <input
        placeholder='Your email'
        className='rounded-md border px-4 py-2 focus:outline-none focus:ring-2 focus:ring-primary'
      />
      <Button radius='sm' color='primary'>
        Subscribe
      </Button>
    </form>
  );
};

export default FormNewsLetter;
