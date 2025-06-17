import CardFood from '@/components/ui/CardFood';
import { useTranslations } from 'next-intl';
import React from 'react';
import { getDataPopular } from '../utils/function';
import Heading from './Heading';

const Popular = () => {
  const t = useTranslations('HomePage');
  const populars = getDataPopular(t);

  return (
    <div className='p-paddingYSection'>
      <Heading title="What's Popular" />
      <div className='grid grid-cols-2 gap-3 lg:grid-cols-4'>
        {populars?.map((popular, index) => (
          <CardFood index={index} key={popular?.id} {...popular} />
        ))}
      </div>
    </div>
  );
};

export default Popular;
