import { Icons } from '@/assets/icons';
import { useUserStore } from '@/stores/userStore';
import React from 'react';
import HeadingProfile from '../../HeadingProfile';
import FormVerifyEmail from './FormVerifyEmail';
import VerifyEmailSuccess from './VerifyEmailSuccess';

const VerifyEmail = () => {
  const isVerify = useUserStore.getState().user?.isActive;
  return (
    <div>
      <HeadingProfile onSetIsEditProfile={() => {}} title='Verify Email' Icon={Icons.ShieldCheck} isHidden={false} />
      {isVerify ? <VerifyEmailSuccess /> : <FormVerifyEmail />}
    </div>
  );
};

export default VerifyEmail;
