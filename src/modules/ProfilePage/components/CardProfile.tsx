'use client';
import React from 'react';

const CardProfile = () => {
  let name = 'Nguyen Quang Vu';
  let parts = name.split(' ');
  let nameDisplay = parts[0][0] + parts[parts.length - 1][0];

  return (
    <div className='flex w-full justify-between gap-4 border px-4 py-8 shadow-lg'>
      <div className='flex w-full items-center gap-4 rounded-md'>
        <span className='flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-primary font-bold text-lg text-white'>
          {nameDisplay}
        </span>
        <div className='flex flex-col gap-1'>
          <span className='font-bold text-lg'>{name}</span>
          <span className='text-sm'>john.doe@example.com</span>
          <p className='max-w-96 text-sm'>
            Food enthusiast who loves trying new cuisines and sharing great dining experiences
          </p>
        </div>
      </div>
    </div>
  );
};

export default CardProfile;
