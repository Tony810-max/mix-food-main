'use client';
import { env } from '@/utils/const';
import { motion } from 'framer-motion';
import { Facebook } from 'lucide-react';
import Link from 'next/link';
import React from 'react';

const ConnectSection: React.FC = () => {
  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
      className='bg-gray-100 py-16'
    >
      <div className='container mx-auto px-4'>
        <div className='mx-auto max-w-2xl text-center'>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className='mb-4 font-bold text-3xl'
          >
            Connect With Us
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className='mb-8 text-gray-600'
          >
            Follow us on social media to stay updated with our latest news, special offers, and exclusive events.
          </motion.p>
          <div className='flex justify-center gap-8'>
            <motion.div whileHover={{ scale: 1.1 }} transition={{ type: 'spring', stiffness: 300 }}>
              <Link
                href={env.FACEBOOK_URL}
                target='_blank'
                rel='noopener noreferrer'
                className='text-2xl transition-colors hover:text-yellow-500'
              >
                <Facebook />
              </Link>
            </motion.div>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default ConnectSection;
