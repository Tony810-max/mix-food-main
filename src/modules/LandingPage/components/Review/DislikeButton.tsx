import { Icons } from '@/assets/icons';
import { motion } from 'framer-motion';
import React, { useState } from 'react';

const DislikeButton = () => {
  const [dislike, setDislike] = useState(false);

  return (
    <motion.div
      onClick={() => {
        setDislike(true);
        setTimeout(() => {
          setDislike(false);
        }, 500);
      }}
      animate={
        !!dislike && {
          scale: [1, 1.5, 1],
          rotate: [0, 15, -15, 0],
          transition: { duration: 0.5 },
        }
      }
    >
      <Icons.thumbsDown color='var(--primary-color)' className='hover:cursor-pointer hover:opacity-50' />
    </motion.div>
  );
};

export default DislikeButton;
