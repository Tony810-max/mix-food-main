import { useTranslations } from 'next-intl';
import React from 'react';

const Heading = () => {
  const t = useTranslations('HomePage');
  return (
    <div className='flex flex-col gap-2'>
      <span className='font-bold text-2xl max-sm:text-center sm:text-4xl md:text-5xl md:leading-[3.75rem]'>
        {t('title-banner')}
      </span>
      <span className='text-base leading-6 max-sm:text-center'>{t('descr-banner')}</span>
    </div>
  );
};

export default Heading;
