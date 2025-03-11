'use client';
import { ROUTES } from '@/lib/routes';
import { motion } from 'framer-motion';
import { Facebook } from 'lucide-react';
import { useTranslations } from 'next-intl';
import Link from 'next/link';
import React from 'react';
import { getPrivacy } from '../utils/const';
const Privacy = () => {
  const t = useTranslations('Footer');
  const privacies = getPrivacy(t);

  return (
    <motion.div
      className='flex flex-col items-center justify-between gap-4 py-6 sm:flex-row'
      initial={{ opacity: 0, x: -100 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 1 }}
    >
      <span className='text-center text-white'>© 2025 Mix Food. All rights reserved.</span>
      <Link href={ROUTES?.FACEBOOK} className='block py-2 hover:opacity-70'>
        <Facebook color='var(--primary-color)' />
      </Link>
      <div className='flex flex-col items-center gap-2 sm:flex-row sm:gap-4'>
        {privacies?.map((privacy, index) => (
          <Link
            key={index}
            href={privacy.href}
            className='text-center text-white hover:font-semibold hover:text-primary'
          >
            {privacy.label}
          </Link>
        ))}
      </div>
    </motion.div>
  );
};

export default Privacy;
