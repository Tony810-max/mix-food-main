import CardFood from '@/components/ui/CardFood';
import { useTranslations } from 'next-intl';
import React from 'react';
import { getDataPopular } from '../utils/const';
import Heading from './Heading';

const Popular = () => {
  const t = useTranslations('HomePage');
  const populars = getDataPopular(t);
  return (
    <div className='p-paddingYSection max-xl:px-4'>
      <Heading title="What's Popular" />
      <div className='grid grid-cols-2 gap-3 py-4 lg:grid-cols-4'>
        {populars?.map((popular, index) => (
          <CardFood index={index} key={popular?.id} img={popular?.img} title={popular?.title} desr={popular?.desr} />
        ))}
      </div>
    </div>
  );
};

export default Popular;
