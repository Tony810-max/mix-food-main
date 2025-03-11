'use client';
import { motion } from 'framer-motion';
import React from 'react';
import Heading from '../Heading';
import FormNewsLetter from './FormNewsLetter';
const Newsletter = () => {
  return (
    <motion.div
      initial={{ opacity: 0, x: -100 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 1 }}
    >
      <Heading title='Newsletter' />
      <span>Subscribe to get the latest updates and promotions.</span>
      <FormNewsLetter />
    </motion.div>
  );
};

export default Newsletter;
