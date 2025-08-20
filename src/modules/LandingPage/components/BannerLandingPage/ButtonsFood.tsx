import { Button } from '@/components/ui/button';
import React from 'react';

const ButtonsFood = () => {
  return (
    <div className='flex justify-center gap-2'>
      <Button size={'lg'} className='bg-gradient'>
        View Menu
      </Button>
      <Button size={'lg'} className='bg-white/30 backdrop-blur-md'>
        Đặt bàn ngay
      </Button>
    </div>
  );
};

export default ButtonsFood;
