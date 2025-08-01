'use client';
import AuthActions from '@/components/layouts/Header/components/AuthActions';
import { useAuth } from '@/hooks/useAuth';
import { motion } from 'framer-motion';
import React from 'react';
const LastedUpdate = () => {
  const token = useAuth().accessToken;
  if (token) return null;
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
      <AuthActions />
    </motion.div>
  );
};

export default LastedUpdate;
