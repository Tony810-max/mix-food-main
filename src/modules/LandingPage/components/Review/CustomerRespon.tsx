'use client';
import type { IReview } from '@/types/common';
import { motion } from 'framer-motion';
import { Star, ThumbsDown, ThumbsUp } from 'lucide-react';
import React from 'react';

const CustomerRespon: React.FC<IReview> = ({ name, date, rating, review }) => {
  const [likeActive, setLikeActive] = React.useState(false);
  const [disLike, setDislike] = React.useState(false);

  const renderReview = (rate: number) => {
    return (
      <>
        {Array.from({ length: rate }, (_, i) => (
          <Star key={i} color='' fill='#ed6626' />
        ))}
        {Array.from({ length: 5 - rate }, (_, i) => (
          <Star key={rate + i} color='#ed6626' />
        ))}
      </>
    );
  };

  return (
    <div className='space-y-3'>
      <div className='flex flex-col'>
        <span className='font-medium text-base capitalize'>{name}</span>
        <span className='font-normal text-primary text-sm'>{date}</span>
      </div>
      <div className='flex items-center '>{renderReview(rating)}</div>
      <span className='inline-block font-medium text-base'>{review}</span>
      <div className='flex items-center gap-4'>
        <div className='flex items-center gap-2'>
          <motion.div
            onClick={() => {
              setLikeActive(true);
              setTimeout(() => {
                setLikeActive(false);
              }, 500);
            }}
            animate={
              likeActive
                ? {
                    scale: [1, 1.5, 1],
                    rotate: [0, 15, -15, 0],
                    transition: { duration: 0.5 },
                  }
                : {}
            }
          >
            <ThumbsUp color='var(--primary-color)' className='hover:cursor-pointer hover:opacity-50' />
          </motion.div>
          <span className='text-primary'>2</span>
        </div>
        <div className='flex items-center gap-2'>
          <motion.div
            onClick={() => {
              setDislike(true);
              setTimeout(() => {
                setDislike(false);
              }, 500);
            }}
            animate={
              disLike
                ? {
                    scale: [1, 1.5, 1],
                    rotate: [0, 15, -15, 0],
                    transition: { duration: 0.5 },
                  }
                : {}
            }
          >
            <ThumbsDown color='var(--primary-color)' className='hover:cursor-pointer hover:opacity-50' />
          </motion.div>
          <span className='text-primary'>2</span>
        </div>
      </div>
    </div>
  );
};

export default CustomerRespon;
