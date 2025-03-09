import { ROUTES } from '@/lib/routes';
import { Facebook } from 'lucide-react';
import { useTranslations } from 'next-intl';
import Link from 'next/link';
import React from 'react';
import Heading from './Heading';

const About = () => {
  const t = useTranslations('Footer');
  return (
    <div>
      <Heading title='Mix Food' />
      <p>{t('des')}</p>
      <Link href={ROUTES?.FACEBOOK} className='block py-2 hover:opacity-70'>
        <Facebook color='var(--primary-color)' />
      </Link>
    </div>
  );
};

export default About;
