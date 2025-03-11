import CardFood from '@/components/ui/CardFood';
import { useTranslations } from 'next-intl';
import React from 'react';
import { getDataFeature } from '../utils/const';

const Feature = () => {
  const t = useTranslations('HomePage');
  const dataFeature = getDataFeature(t);
  return (
    <div className='grid grid-cols-2 gap-3 py-paddingSection max-xl:px-4 sm:grid-cols-3 lg:grid-cols-5'>
      {dataFeature?.map((feature, index) => (
        <CardFood
          index={index}
          key={feature?.id}
          img={feature?.img}
          title={feature?.title}
          desr={feature?.desr}
          className='border border-primary p-4'
        />
      ))}
    </div>
  );
};

export default Feature;
