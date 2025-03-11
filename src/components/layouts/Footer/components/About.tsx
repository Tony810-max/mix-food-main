'use client';
import { ROUTES } from '@/lib/routes';
import { motion } from 'framer-motion';
import { Facebook } from 'lucide-react';
import { useTranslations } from 'next-intl';
import Link from 'next/link';
import React from 'react';
import Heading from './Heading';
const About = () => {
  const t = useTranslations('Footer');
  return (
    <motion.div
      initial={{ opacity: 0, x: -100 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 1 }}
    >
      <Heading title='Mix Food' />
      <p>{t('des')}</p>
      <Link href={ROUTES?.FACEBOOK} className='block py-2 hover:opacity-70'>
        <Facebook color='var(--primary-color)' />
      </Link>
    </motion.div>
  );
};

export default About;
