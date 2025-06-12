'use client';
import { ROUTES } from '@/lib/routes';
import { Button } from '@heroui/react';
import { motion } from 'framer-motion';
import { useTranslations } from 'next-intl';
import Link from 'next/link';
import React from 'react';
const LastedUpdate = () => {
  const t = useTranslations('Auth');

  return (
    <motion.div
      initial={{ opacity: 0, y: -100 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 1 }}
      className='flex flex-col items-center gap-4 px-4 py-paddingSection sm:gap-8 sm:px-0'
    >
      <div className='flex flex-col gap-2'>
        <span className='text-center font-bold text-2xl md:text-4xl'>Get the latest updates</span>
        <span className='text-center'>Sign up to receive news and promotions from Thai Food in Vietnam</span>
      </div>
      <Link href={ROUTES?.AUTHENTICATION}>
        <Button color='primary'>{t('auth')}</Button>
      </Link>
    </motion.div>
  );
};

export default LastedUpdate;
