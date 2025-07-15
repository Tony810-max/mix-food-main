'use client';

import React from 'react';

import { useUserStore } from '@/stores/userStore';

const CardProfile = () => {
  const user = useUserStore((state) => state.user);
  const name = user?.username || 'Your Name';
  const parts = name.split(' ');
  const nameDisplay = parts[0][0] + parts[parts.length - 1][0];

  return (
    <div className='flex w-full justify-between gap-4 border px-4 py-8 shadow-lg'>
      <div className='flex w-full items-center gap-4 rounded-md'>
        <span className='flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-primary font-bold text-lg text-white'>
          {nameDisplay}
        </span>
        <div className='flex flex-col gap-1'>
          <span className='font-bold text-lg'>{name}</span>
          <span className='text-sm'>{user?.email || 'email here'}</span>
          <p className='max-w-96 text-sm'>
            Food enthusiast who loves trying new cuisines and sharing great dining experiences
          </p>
        </div>
      </div>
      <div>
        {user?.isVerified ? (
          <span className='rounded-full bg-green-100 px-4 py-1 font-medium text-green-700 text-sm'>Verified</span>
        ) : (
          <span className='rounded-full bg-red-100 px-4 py-1 font-medium text-red-500 text-sm'>Unverified</span>
        )}
      </div>
    </div>
  );
};

export default CardProfile;
