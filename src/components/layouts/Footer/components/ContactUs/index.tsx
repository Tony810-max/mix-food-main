import { Clock, Mail, MapPin, Phone } from 'lucide-react';
import { useTranslations } from 'next-intl';
import React from 'react';
import Heading from '../Heading';
import IconLabel from './IconLabel';

const ContactUs = () => {
  const t = useTranslations('About');

  return (
    <div>
      <Heading title='Contact Us' />
      <div className='space-y-4'>
        <IconLabel Icon={MapPin} label={t('address')} />
        <IconLabel Icon={Phone} label='(+84)905.47.37.28' />
        <IconLabel Icon={Mail} label='mixfood1708@gmail.com' />
        <IconLabel Icon={Clock} label={t('open')} />
      </div>
    </div>
  );
};

export default ContactUs;
