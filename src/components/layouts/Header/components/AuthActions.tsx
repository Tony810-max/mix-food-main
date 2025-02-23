import { ROUTES } from '@/lib/routes';
import { Button, Link } from '@heroui/react';
import { useTranslations } from 'next-intl';
import React from 'react';
const AuthActions = () => {
  const t = useTranslations('Auth');

  return (
    <div className='absolute bottom-24 flex w-full gap-2 border-t pt-4 lg:static lg:w-auto lg:border-none lg:pt-0'>
      <Button as={Link} variant='ghost' href={ROUTES?.SIGN_UP} className='flex-1 text-center lg:flex-none'>
        {t('signUp')}
      </Button>
      <Button as={Link} color='primary' href={ROUTES?.LOGIN} className='flex-1 text-center lg:flex-none'>
        {t('login')}
      </Button>
    </div>
  );
};

export default AuthActions;
