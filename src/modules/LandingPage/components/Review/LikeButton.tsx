import { Icons } from '@/assets/icons';
import { motion } from 'framer-motion';
import React, { useState } from 'react';

const LikeButton = () => {
  const [likeActive, setLikeActive] = useState(false);

  return (
    <motion.div
      onClick={() => {
        setLikeActive(true);
        setTimeout(() => {
          setLikeActive(false);
        }, 500);
      }}
      animate={
        !!likeActive && {
          scale: [1, 1.5, 1],
          rotate: [0, 15, -15, 0],
          transition: { duration: 0.5 },
        }
      }
    >
      <Icons.thumbsUp color='var(--primary-color)' className='hover:cursor-pointer hover:opacity-50' />
    </motion.div>
  );
};

export default LikeButton;
