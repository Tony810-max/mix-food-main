import { env } from '@/utils/const';
import { useTranslations } from 'next-intl';
import React from 'react';

const LocationInfo = () => {
  const t = useTranslations('About');
  const tLocation = useTranslations('Location');
  return (
    <div className='flex flex-col gap-8 rounded-lg bg-white p-6 lg:flex-row'>
      <div className='max-w-xl space-y-4 rounded-lg px-4 py-6 shadow-lg'>
        <h2 className='text-center font-bold text-2xl text-primary'>{tLocation('title')}</h2>
        <div className='text-lg'>
          <span className='font-semibold'>{t('address_title')}: </span>
          {t('address')}
        </div>
        <div className='text-lg'>
          <span className='font-semibold'>{t('open_title')}: </span>
          {t('open_time')}
        </div>
      </div>
      <div className='w-full rounded-lg border border-primary md:h-80 '>
        <iframe
          src={env.GOOGLE_MAPS_EMBED_URL}
          width='100%'
          height='100%'
          style={{ border: 0 }}
          allowFullScreen={true}
          loading='lazy'
          referrerPolicy='no-referrer-when-downgrade'
          title='Google Map Location'
        ></iframe>
      </div>
    </div>
  );
};

export default LocationInfo;
