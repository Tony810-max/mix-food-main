import CardFood from '@/components/ui/CardFood';
import { useTranslations } from 'next-intl';
import React from 'react';
import { getDataPopular } from '../utils/const';

const Popular = () => {
  const t = useTranslations('HomePage');
  const populars = getDataPopular(t);
  return (
    <div className='py-4 max-xl:px-4'>
      <span className='font-bold text-2xl'>What's Popular</span>
      <div className='grid grid-cols-2 gap-3 py-4 lg:grid-cols-4'>
        {populars?.map((popular) => (
          <CardFood key={popular?.id} img={popular?.img} title={popular?.title} desr={popular?.desr} />
        ))}
      </div>
    </div>
  );
};

export default Popular;
