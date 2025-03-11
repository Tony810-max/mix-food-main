'use client';
import type { IHeading } from '@/types/common';
import { motion } from 'framer-motion';
import React from 'react';

const Heading: React.FC<IHeading> = ({ title }) => {
  return (
    <motion.span
      initial={{ x: -20 }}
      whileInView={{ x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className='inline-block py-3 font-bold text-2xl'
    >
      {title}
    </motion.span>
  );
};

export default Heading;
