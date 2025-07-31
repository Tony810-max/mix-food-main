import { Button } from '@/components/ui/button';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import { useTranslations } from 'next-intl';
import React from 'react';
import TabAuth from './TabAuth';

const AuthActions = () => {
  const t = useTranslations('Auth');

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant='outline' className='rounded-full bg-primary'>
          {t('auth')}
        </Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Welcome to Mix Food</DialogTitle>
          <DialogDescription>Please sign in to continue. If you don't have an account, sign up now.</DialogDescription>
        </DialogHeader>
        <TabAuth />
      </DialogContent>
    </Dialog>
  );
};

export default AuthActions;
