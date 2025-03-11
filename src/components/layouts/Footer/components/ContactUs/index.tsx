'use client';
import { motion } from 'framer-motion';
import { Clock, Mail, MapPin, Phone } from 'lucide-react';
import { useTranslations } from 'next-intl';
import React from 'react';
import Heading from '../Heading';
import IconLabel from './IconLabel';

const ContactUs = () => {
  const t = useTranslations('About');

  return (
    <motion.div
      initial={{ opacity: 0, x: -100 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 1 }}
    >
      <Heading title='Contact Us' />
      <div className='space-y-4'>
        <IconLabel Icon={MapPin} label={t('address')} />
        <IconLabel Icon={Phone} label='(+84)905.47.37.28' />
        <IconLabel Icon={Mail} label='mixfood1708@gmail.com' />
        <IconLabel Icon={Clock} label={t('open')} />
      </div>
    </motion.div>
  );
};

export default ContactUs;
