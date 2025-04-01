import Image from 'next/image';
import React, { type FC, type ReactNode } from 'react';

interface IBanner {
  image: string;
  children: ReactNode;
}

const Banner: FC<IBanner> = ({ image, children }) => {
  return (
    <div className='relative aspect-square sm:aspect-[2/1] md:aspect-[3/1]'>
      <div className='absolute inset-0 z-10 bg-black/30' />
      <Image src={image} alt='banner' fill priority unoptimized className='object-cover' />
      <div className='absolute inset-0 z-20 flex flex-col items-center justify-center text-center'>{children}</div>
    </div>
  );
};

export default Banner;
