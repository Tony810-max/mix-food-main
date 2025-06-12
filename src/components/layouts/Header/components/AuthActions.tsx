import { ROUTES } from '@/lib/routes';
import { Button } from '@heroui/react';
import { useTranslations } from 'next-intl';
import Link from 'next/link';
import React from 'react';
const AuthActions = () => {
  const t = useTranslations('Auth');

  return (
    <div className='absolute bottom-24 flex w-full gap-2 border-t pt-4 lg:static lg:w-auto lg:border-none lg:pt-0'>
      <Button as={Link} variant='ghost' href={ROUTES?.AUTHENTICATION} className='flex-1 text-center lg:flex-none'>
        {t('auth')}
      </Button>
    </div>
  );
};

export default AuthActions;
