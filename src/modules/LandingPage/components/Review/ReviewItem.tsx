'use client';

import { motion } from 'framer-motion';
import type { FC, HTMLAttributes } from 'react';
import { Rating } from 'react-simple-star-rating';
import type { IReview } from '../../utils/types';
import DislikeButton from './DislikeButton';
import LikeButton from './LikeButton';

export interface ReviewItemProps extends Pick<HTMLAttributes<HTMLDivElement>, 'className'>, IReview {
  index: number;
}

const ReviewItem: FC<ReviewItemProps> = ({ name, date, rating, review, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, translateX: -50 }}
      whileInView={{ opacity: 1, translateX: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.3, delay: 0 + index * 0.2 }}
      className='space-y-3'
    >
      <div>
        <p className='font-medium text-base capitalize'>{name}</p>
        <p className='font-normal text-primary text-sm'>{date}</p>
      </div>
      <Rating initialValue={rating} readonly />
      <p className='font-medium text-base'>{review}</p>

      {/* Actions like and dislike */}
      <div className='flex items-center gap-4'>
        <div className='flex items-center gap-2'>
          <LikeButton />
          <span className='text-primary'>2</span>
        </div>

        <div className='flex items-center gap-2'>
          <DislikeButton />
          <span className='text-primary'>2</span>
        </div>
      </div>
    </motion.div>
  );
};

export default ReviewItem;
