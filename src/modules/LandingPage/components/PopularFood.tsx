'use client';
import { motion } from 'framer-motion';
import Image from 'next/image';
import React from 'react';

const PopularFood = () => {
  return (
    <div className='grid grid-cols-1 gap-3 px-4 py-paddingSection sm:grid-cols-3 sm:px-0'>
      {Array?.from({ length: 3 }, (_, index) => (
        <motion.div
          initial={{ x: -100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 1, delay: index * 0.25 }}
          viewport={{ once: true }}
          className='relative aspect-[3/2]'
          key={index}
        >
          <Image
            src={`/images/landingPage/food${index + 1}.webp`}
            alt='food popular'
            fill
            priority
            unoptimized
            className='rounded-xl'
          />
        </motion.div>
      ))}
    </div>
  );
};

export default PopularFood;
