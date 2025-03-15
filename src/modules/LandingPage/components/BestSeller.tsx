import CardFood from '@/components/ui/CardFood';
import { useTranslations } from 'next-intl';
import React from 'react';
import { getDataFeature } from '../utils/function';
import Heading from './Heading';

const BestSeller = () => {
  const t = useTranslations('HomePage');
  const dataFeature = getDataFeature(t);

  return (
    <div className='p-paddingYSection'>
      <Heading title='Best seller' />
      <div className='grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-4'>
        {dataFeature?.map((feature, index) => (
          <CardFood
            index={index}
            key={feature?.id}
            img={feature?.img}
            title={feature?.title}
            description={feature?.description}
          />
        ))}
      </div>
    </div>
  );
};

export default BestSeller;
