import { Button } from '@/components/ui/button';
import { ROUTES } from '@/lib/routes';
import Link from 'next/link';
import React from 'react';

const ButtonsFood = () => {
  return (
    <div className='flex justify-center gap-2'>
      <Link href={ROUTES?.MENU}>
        <Button size={'lg'} className='bg-gradient'>
          View Menu
        </Button>
      </Link>
      <Link href={ROUTES?.BOOK}>
        <Button size={'lg'} className='bg-white/30 backdrop-blur-md'>
          Đặt bàn ngay
        </Button>
      </Link>
    </div>
  );
};

export default ButtonsFood;
