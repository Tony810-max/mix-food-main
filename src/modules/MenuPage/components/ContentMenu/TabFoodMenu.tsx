'use client';
import { Button, ButtonGroup } from '@heroui/react';
import React from 'react';

import type { Category } from '../../utils/const';

interface TabFoodMenuProps {
  categories: Category[];
  selectedCategory: string;
  onSelectCategory: (id: string) => void;
}

const TabFoodMenu = ({ categories, selectedCategory, onSelectCategory }: TabFoodMenuProps) => {
  return (
    <ButtonGroup className='flex justify-center' variant='bordered'>
      {categories.map((category) => (
        <Button
          key={category.id}
          className={
            selectedCategory === category.id
              ? 'bg-primary text-white shadow-xl hover:bg-primary hover:text-white'
              : 'hover:bg-primary hover:text-white'
          }
          variant={selectedCategory === category.id ? 'solid' : 'bordered'}
          onPress={() => onSelectCategory(category.id)}
        >
          {category.name}
        </Button>
      ))}
    </ButtonGroup>
  );
};

export default TabFoodMenu;
