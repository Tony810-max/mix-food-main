'use client';
import { motion } from 'framer-motion';
import React from 'react';

interface AboutSectionProps {
  story: string;
  specialties: string[];
}

const AboutSection: React.FC<AboutSectionProps> = ({ story, specialties }) => {
  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
      className='container mx-auto px-4 py-16'
    >
      <div className='mx-auto max-w-4xl'>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className='mb-8 text-center font-bold text-4xl'
        >
          About Mix Food
        </motion.h2>
        <div className='grid gap-8 md:grid-cols-2'>
          <div>
            <motion.h3
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className='mb-4 font-semibold text-2xl'
            >
              Our Story
            </motion.h3>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className='mb-4'
            >
              {story}
            </motion.p>
          </div>
          <div>
            <motion.h3
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className='mb-4 font-semibold text-2xl'
            >
              Our Specialties
            </motion.h3>
            <motion.ul
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className='space-y-4'
            >
              {specialties.map((specialty, index) => (
                <motion.li
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.15 + 0.7 }}
                  className='flex items-center gap-2'
                >
                  <span className='flex h-8 w-8 items-center justify-center rounded-full bg-primary text-white'>•</span>
                  <span>{specialty}</span>
                </motion.li>
              ))}
            </motion.ul>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default AboutSection;
