'use client';
import { motion } from 'framer-motion';
import { useTranslations } from 'next-intl';
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
      <p className='text-white'>{t('des')}</p>
    </motion.div>
  );
};

export default About;
