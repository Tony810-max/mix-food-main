import Image from 'next/image';
import React from 'react';

const ImageAbout = () => {
  return (
    <div className='relative aspect-[3/2] w-full lg:aspect-[5/3] '>
      <Image
        src={'/images/landingPage/food1.webp'}
        alt='food'
        fill
        priority
        unoptimized
        className='rounded-md object-cover'
      />
    </div>
  );
};

export default ImageAbout;
