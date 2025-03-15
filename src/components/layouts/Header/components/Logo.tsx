import { ROUTES } from '@/lib/routes';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const Logo = () => {
  return (
    <Link href={ROUTES?.LANDING_PAGE} className='flex items-center gap-2 py-2 lg:py-0'>
      <div className='relative h-10 w-10'>
        <Image
          src='/images/layouts/logo.webp'
          alt='Logo'
          fill
          priority
          unoptimized
          className='overflow-hidden rounded-full object-cover'
        />
      </div>
      <p className='hidden font-bold text-primary text-xl md:block'>Mix Food</p>
    </Link>
  );
};

export default Logo;
