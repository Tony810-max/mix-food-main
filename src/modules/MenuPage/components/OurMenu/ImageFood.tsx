import Image from 'next/image';
import React from 'react';

const ImageFood = () => {
  return (
    <div className='relative flex-1 max-md:min-h-60'>
      <Image
        src='/images/menuPage/goitomthailan.webp'
        alt='image food'
        fill
        priority
        unoptimized
        className='rounded-md object-cover'
      />
    </div>
  );
};

export default ImageFood;
