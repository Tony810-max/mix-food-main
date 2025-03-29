'use client';
import { Button, ButtonGroup } from '@heroui/react';
import React from 'react';

const TabFoodMenu = () => {
  return (
    <ButtonGroup className='flex justify-center' variant='bordered'>
      <Button className='bg-primary text-white shadow-xl hover:bg-primary hover:text-white' variant='solid'>
        Curries
      </Button>
      <Button className='hover:bg-primary hover:text-white'>Curries</Button>
      <Button className='hover:bg-primary hover:text-white'>Desserts</Button>
    </ButtonGroup>
  );
};

export default TabFoodMenu;
