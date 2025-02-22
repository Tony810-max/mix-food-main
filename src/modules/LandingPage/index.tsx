'use client';

import { useTranslations } from 'next-intl';
import React from 'react';

const LandingPage = () => {
  const t = useTranslations('HomePage');

  return (
    <div className='flex justify-center'>
      <div className='container'>{t('title')}</div>
    </div>
  );
};

export default LandingPage;
