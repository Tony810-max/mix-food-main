import { useTranslations } from 'next-intl';
import React from 'react';

const Heading = () => {
  const t = useTranslations('HomePage');

  return (
    <div className='flex flex-col gap-2'>
      <span className='text-center font-bold text-5xl max-sm:text-center sm:text-4xl md:text-7xl'>Mix Food</span>
      <p className='max-w-2xl text-center text-xl max-sm:text-center'>{t('descr-banner')}</p>
    </div>
  );
};

export default Heading;
