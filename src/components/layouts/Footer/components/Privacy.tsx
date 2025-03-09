import { useTranslations } from 'next-intl';
import Link from 'next/link';
import React from 'react';
import { getPrivacy } from '../utils/const';

const Privacy = () => {
  const t = useTranslations('Footer');
  const privacies = getPrivacy(t);

  return (
    <div className='flex flex-col items-center justify-between gap-4 py-6 sm:flex-row'>
      <span>© 2025 Mix Food. All rights reserved.</span>
      <div className='flex flex-col items-center gap-2 sm:flex-row sm:gap-4'>
        {privacies?.map((privacy, index) => (
          <Link key={index} href={privacy.href} className='text-center hover:font-semibold hover:text-primary'>
            {privacy.title}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Privacy;
