import CardFood from '@/components/ui/CardFood';
import { useTranslations } from 'next-intl';
import React from 'react';
import { getDataFeature } from '../utils/const';

const Feature = () => {
  const t = useTranslations('HomePage');
  const dataFeature = getDataFeature(t);
  return (
    <div className='grid grid-cols-2 gap-3 py-4 max-lg:px-4 sm:grid-cols-3 lg:grid-cols-5'>
      {dataFeature?.map((feature) => (
        <CardFood key={feature?.id} img={feature?.img} title={feature?.title} desr={feature?.desr} />
      ))}
    </div>
  );
};

export default Feature;
