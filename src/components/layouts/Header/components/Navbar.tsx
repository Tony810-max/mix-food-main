import { useTranslations } from 'next-intl';
import Link from 'next/link';
import React from 'react';
import { getNav } from '../utils/const';

const Navbar = () => {
  const t = useTranslations('HomePage');

  const nav = getNav(t);
  return (
    <div className='flex flex-col gap-5 py-4 lg:flex-row lg:items-center lg:gap-9'>
      {nav?.map((item, index) => (
        <Link key={index} href={item?.href} className='font-medium hover:text-primary lg:text-center'>
          {item?.label}
        </Link>
      ))}
    </div>
  );
};

export default Navbar;
