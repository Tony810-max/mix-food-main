import { ROUTES } from '@/lib/routes';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const Logo = () => {
  return (
    <div className='flex items-center gap-2 py-2 lg:py-0'>
      <div className='relative h-10 w-10'>
        <Image src={'/images/layouts/logo.webp'} alt='img Logo' fill priority unoptimized />
      </div>
      <Link href={ROUTES?.LANDING_PAGE} className='font-bold text-primary text-xl'>
        Mix Food
      </Link>
    </div>
  );
};

export default Logo;
