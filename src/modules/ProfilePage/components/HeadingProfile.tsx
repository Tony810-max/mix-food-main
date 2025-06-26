import { Icons } from '@/assets/icons';
import { Button } from '@heroui/react';
import React from 'react';

const HeadingProfile = () => {
  return (
    <div className='mb-4 flex items-center justify-between gap-2 '>
      <div className='flex items-center gap-2'>
        <Icons.User size={24} color='var(--primary-color)' />
        <span className='font-bold text-2xl'>Personal Information</span>
      </div>
      <Button color='primary' variant='bordered' startContent={<Icons.PenLine size={18} className='flex-shrink-0' />}>
        Edit Profile
      </Button>
    </div>
  );
};

export default HeadingProfile;
