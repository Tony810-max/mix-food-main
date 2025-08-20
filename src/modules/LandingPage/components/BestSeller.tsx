import CardFood from '@/components/CardFood';
import { useTranslations } from 'next-intl';
import React from 'react';
import { getDataFeature } from '../utils/function';
import Heading from './Heading';

const BestSeller = () => {
  const t = useTranslations('HomePage');
  const dataFeature = getDataFeature(t);

  return (
    <div className='py-20'>
      <Heading title='Best seller' description='Khám phá những món ăn đặc sắc nhất của ẩm thực Thái Lan' />
      <div className='grid grid-cols-3 gap-4'>
        {dataFeature?.map((feature, index) => (
          <CardFood index={index} key={feature?.id} {...feature} />
        ))}
      </div>
    </div>
  );
};

export default BestSeller;
