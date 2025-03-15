import { useTranslations } from 'next-intl';
import React from 'react';

const Heading = () => {
  const t = useTranslations('HomePage');

  return (
    <div className='flex flex-col gap-2'>
      <span className='font-bold text-3xl max-sm:text-center sm:text-4xl md:text-5xl'>{t('title-banner')}</span>
      <span className='text-sm max-sm:text-center md:text-base'>{t('descr-banner')}</span>
    </div>
  );
};

export default Heading;
