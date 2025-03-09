import { useTranslations } from 'next-intl';
import Link from 'next/link';
import React from 'react';
import { getNav } from '../../Header/utils/const';
import Heading from './Heading';

const QuickLink = () => {
  const t = useTranslations('HomePage');
  const tFooter = useTranslations('Footer');
  const nav = getNav(t);

  return (
    <div>
      <Heading title={tFooter('QuickLink')} />
      <div className='flex flex-col gap-2'>
        {nav?.map((nav, index) => (
          <Link href={nav?.href} key={index} className='hover:font-semibold hover:text-primary'>
            {nav?.label}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default QuickLink;
