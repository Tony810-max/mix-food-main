import { ROUTES } from '@/lib/routes';
import { Button } from '@heroui/react';
import { ArrowRight } from 'lucide-react';
import { useTranslations } from 'next-intl';
import Link from 'next/link';
import React from 'react';
const AuthActions = () => {
  const t = useTranslations('Auth');

  return (
    <div className='absolute bottom-24 flex w-full justify-center border-t pt-4 lg:static lg:w-auto lg:border-none lg:pt-0'>
      <Button
        as={Link}
        href={ROUTES?.AUTHENTICATION}
        variant='solid'
        color='primary'
        size='sm'
        className='flex items-center gap-1 rounded-full px-4 py-1.5 font-semibold text-sm text-white shadow-sm transition-transform hover:scale-105 active:scale-95'
      >
        {t('auth')} <ArrowRight className='h-4 w-4' />
      </Button>
    </div>
  );
};

export default AuthActions;
