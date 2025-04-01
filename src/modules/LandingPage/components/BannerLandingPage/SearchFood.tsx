'use client';

import { Button, Input } from '@heroui/react';
import { Search } from 'lucide-react';
import { useTranslations } from 'next-intl';
import React from 'react';

const SearchFood = () => {
  const t = useTranslations('HomePage');

  return (
    <div className='w-full'>
      <Input
        startContent={
          <Search
            color='var(--primary-color)'
            className='pointer-events-none flex-shrink-0 text-2xl text-default-400'
          />
        }
        endContent={
          <Button radius='lg' className='absolute top-1 right-2 bg-[#ed6626] font-bold text-white'>
            {t('find-food')}
          </Button>
        }
        color='primary'
        size='lg'
        placeholder={t('search')}
        classNames={{
          input: ['!pr-32'],
        }}
      />
    </div>
  );
};

export default SearchFood;
