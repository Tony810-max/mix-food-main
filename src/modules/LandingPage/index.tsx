import { useTranslations } from 'next-intl';
import React from 'react';

const LandingPage = () => {
  const t = useTranslations('HomePage');
  return (
    <div className='mt-20 flex justify-center lg:mt-[6.5rem] xl:mt-20'>
      <div className='container'>landing page</div>
    </div>
  );
};

export default LandingPage;
