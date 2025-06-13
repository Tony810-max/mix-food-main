'use client';
import { env } from '@/utils/const';
import { motion } from 'framer-motion';
import { Facebook } from 'lucide-react';
import Link from 'next/link';
import React from 'react';

interface HeroSectionProps {
  title: string;
  subtitle: string;
}

const HeroSection: React.FC<HeroSectionProps> = ({ title, subtitle }) => {
  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
      className='relative h-96 bg-primary pt-[72px]'
    >
      <div className='absolute inset-0 bg-black/40'></div>
      <div className='container relative mx-auto flex h-full flex-col items-center justify-center px-4 text-white'>
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className='mb-4 font-bold text-6xl'
        >
          {title}
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className='mb-8 text-2xl'
        >
          {subtitle}
        </motion.p>
        <div className='flex gap-4'>
          <motion.div whileHover={{ scale: 1.1 }} transition={{ type: 'spring', stiffness: 300 }}>
            <Link
              href={env.FACEBOOK_URL}
              target='_blank'
              rel='noopener noreferrer'
              className='text-2xl transition-colors hover:text-white'
            >
              <Facebook />
            </Link>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
};

export default HeroSection;
