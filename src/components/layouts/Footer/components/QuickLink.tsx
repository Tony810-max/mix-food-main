'use client';
import { motion } from 'framer-motion';
import { useTranslations } from 'next-intl';
import Link from 'next/link';
import React from 'react';
import { navData } from '../../Header/utils/const';
import Heading from './Heading';
const QuickLink = () => {
  const t = useTranslations('HomePage');
  const tFooter = useTranslations('Footer');
  const nav = navData(t);

  return (
    <motion.div
      initial={{ opacity: 0, x: -100 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 1 }}
    >
      <Heading title={tFooter('QuickLink')} description='' />
      <div className='flex flex-col gap-2'>
        {nav?.map((nav, index) => (
          <Link href={nav?.href} key={index} className='text-white hover:font-semibold hover:text-primary'>
            {nav?.label}
          </Link>
        ))}
      </div>
    </motion.div>
  );
};

export default QuickLink;
