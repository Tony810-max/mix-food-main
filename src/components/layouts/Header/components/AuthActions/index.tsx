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
import React, { useState } from 'react';
import FormForgotPassword from './FormForgotPassword';
import TabAuth from './TabAuth';

const AuthActions = () => {
  const [isActive, setIsActive] = useState<boolean>(false);

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
          <DialogDescription>
            {!isActive
              ? "Please sign in to continue. If you don't have an account, sign up now."
              : 'If you forget your password, please enter email above to reset password'}
          </DialogDescription>
        </DialogHeader>
        {!isActive ? <TabAuth onSetActive={setIsActive} /> : <FormForgotPassword onSetActive={setIsActive} />}
      </DialogContent>
    </Dialog>
  );
};

export default AuthActions;
